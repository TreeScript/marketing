import { NextRequest, NextResponse } from "next/server"
import { getPracticeDataSource } from "@/lib/db/practice/practiceDataSource"
import { SqlProblem } from "@/lib/db/service/entities/SqlProblem"

export async function GET(request: NextRequest) {
    
    const ds = await getPracticeDataSource()
    const repo = ds.getRepository(SqlProblem)

    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")
    const difficulty = searchParams.get("difficulty")
    const page = Number(searchParams.get("page") ?? 1)
    const limit = Number(searchParams.get("limit") ?? 20)

    const qb = repo.createQueryBuilder("problem")

    if(category) {
        qb.andWhere("problem.category = :category", { category })
    }

    if(difficulty) {
        qb.andWhere("problem.difficulty =: difficulty", { difficulty })
    }

    qb.orderBy("problem.created_at", "DESC")
    qb.skip((page -1) * limit).take(limit)

    const [items, total] = await qb.getManyAndCount()

    return NextResponse.json({
        ok: true,
        total,
        page,
        limit,
        items
    })
}