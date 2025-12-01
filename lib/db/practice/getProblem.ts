import { getPracticeDataSource } from "./practiceDataSource"
import { SqlProblem } from "../service/entities/SqlProblem"

export async function getProblemBySlug(slug: string) {
    
    const dataSource = await getPracticeDataSource()
    const repo = dataSource.getRepository(SqlProblem)

    const problem = await repo.findOne({ where: { slug } })

    return problem
}