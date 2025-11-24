import { getProblemBySlug } from "@/lib/db/practice/getProblem"
import duckdb from "duckdb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const { sql: userQuery } = await request.json()
        const slug = params.slug

        const problem = await getProblemBySlug(slug)
        if(!problem) {
            return NextResponse.json(
                { ok: false, error: "문제를 찾을 수 없습니다." },
                { status: 404 }
            )
        }

        const { example_schema, example_rows, answer_query } = problem
    }catch(error: any){
        
    }    
}