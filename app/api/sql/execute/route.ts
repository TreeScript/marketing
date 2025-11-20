import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_READONLY_USER,
    password: process.env.DB_READONLY_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
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