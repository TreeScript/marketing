import { NextResponse } from "next/server"
import { getPracticeDataSource } from "@/lib/db/practice/practiceDataSource"
import { SqlProblem } from "@/lib/db/service/entities/SqlProblem"

export async function GET(
    _reqeust: Request,
    context: { params: { slug: string } }
) {
    const { slug } = context.params

    try {
        const practiceDataSource = await getPracticeDataSource()
        const repo = practiceDataSource.getRepository(SqlProblem)

        const problem = await repo.findOne({ where: { slug } })
        if(!problem) {
            return NextResponse.json(
                { ok: false, message: "문제를 찾을 수 없습니다." },
                { status: 404 } 
            )
        }

        return NextResponse.json({
            ok: true,
            problem: {
                id: problem.id,
                slug: problem.slug,
                title: problem.title,
                description: problem.description,
                difficulty: problem.difficulty,
                tags: Array.isArray(problem.tags) ? problem.tags : [],
                exampleSchema: problem.example_schema ?? {},
                businessRules: problem.business_rules ?? [],
                expectedOutputSchema: problem.expected_output_schema ?? [],
                sampleOutput: problem.sample_output ?? [],
                answerQuery: problem.answer_query ?? "",
            }
        })
    }catch(error: any) {
        console.log(`/app/api/problems/[slug]/routes Error: ${error}`)
        return NextResponse.json(
            { ok: false, message: `/app/api/problems/[slug]/routes Error: ${String(error)}` },
            { status: 500 }
        )
    }
}