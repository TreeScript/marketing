"use server"

import { NextResponse } from "next/server"
import mysql from "mysql2/promise"
import fs from "node:fs"

function getSSL() {
    if(!process.env.DB_CA_CERT_PATH) return undefined

    try {
        return {
            ca: fs.readFileSync(process.env.DB_CA_CERT_PATH, "utf-8")
        }
    }catch (err) {
        console.error(`SSL read error: ${err}`)
        return undefined
    }
}

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_APP,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASS_APP,
    database: process.env.SQL_PROJECT_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    ssl: getSSL()
})

export async function POST(request: Request) {
    try {
        const { sql } = await request.json()
        const forbidden = ["delete", "upadate", "insert", "drop", "alter", "truncate"]
        const check = forbidden.some((word) => 
            sql.toLowerCase().includes(word),
        )
        if(check) {
            return NextResponse.json(
                { error: "허용되지 않은 SQL입니다. (SELECT만 가능)" },
                { status: 400 },
            )
        }

        const connection = await pool.getConnection()
        const [rows, fields] = await connection.query(sql)
        if(!Array.isArray(rows)) {
            return NextResponse.json(
                { error: `SELECT 쿼리만 실행할 수 있습니다.` },
                { status: 400 }
            )
        }

        connection.release()

        return NextResponse.json({
            columns: fields.map((field: any) => field.name),
            rows: rows.map((row: any) => Object.values(row)),
        })
    }catch(error: any) {
        console.error(`SQL Error: ${error}`)

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}