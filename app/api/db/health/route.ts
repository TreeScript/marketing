import { NextResponse } from "next/server"
import { getServiceDataSource } from "@/lib/db/service/serviceDataSource"
import { getPracticeDataSource } from "@/lib/db/practice/practiceDataSource"

export const runtime = "nodejs"

export async function GET() {

    const ds = await getServiceDataSource()
    const practiceDs = await getPracticeDataSource()

    try {
        if(!ds.isInitialized && !practiceDs.isInitialized) {
            await ds.initialize()
        }
        
        const [serviceResult] = await ds.query("SELECT NOW() AS now")
        const [practiceResult] = await ds.query("SELECT NOW() AS now")
        
        return NextResponse.json({ 
            ok: true, 
            serviceDB: {
                connected: true,
                time: serviceResult.now
            },
            practiceDB: {
                connected: true,
                time: practiceResult.now
            } 
        }, { status: 200 })
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