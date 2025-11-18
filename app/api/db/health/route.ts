import { NextResponse } from "next/server"
import { getAppDataSource } from "@/lib/db/data-source"

export const runtime = "nodejs"

export async function GET() {

    const ds = await getAppDataSource()

    try {
        if(!ds.isInitialized) {
            await ds.initialize()
        }
        const result = await ds.query("SELECT 1 AS ok")
        
        return NextResponse.json({ ok: true, result }, { status: 200 })
    }catch(err: any) {
        console.error("[DB HEALTH ERROR]", err)

        return NextResponse.json(
            { ok: false, error: err?.message ?? "DB connection faile" },
            { status: 500 }
        )
    }finally {
        // if (ds.isInitialized) {
        //     await ds.destroy()
        // }
    }
}