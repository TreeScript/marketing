import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Index,
} from "typeorm"

export type Difficulty = "easy" | "mid" | "hard" | "expert"
export type Category = "ga4" | "naver_ads" | "crm" | "ecommerce" | "general"

@Entity("sql_problems")
export class SqlProblem {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Index({ unique: true })
    @Column({ type: "varchar", length: 200, nullable: false })
    slug!: string

    @Column({ type: "varchar", length: 255, nullable: false })
    title!: string

    @Column({ type: "text" })
    description!: string

    @Column({
        type: "enum",
        enum: ["ga4", "naver_ads", "crm", "ecommerce", "general"]
    })
    category!: Category

    @Column({
        type: "enum",
        enum: ["easy", "mid", "hard", "expert"],
    })
    difficulty!: Difficulty

    @Column({ type: "json" })
    tags!: string[]
    
    @Column({ type: "json" })
    example_schema!: Record<string, string[]>

    @Column({ type: "json", nullable: false })
    business_rules!: string[] | Record<string, any>

    @Column({ type: "json", nullable: false })
    expected_output_schema!: Record<string, any> | any[]

    @Column({ type: "json", nullable: false })
    sample_output!: any[][]

    @Column({ type: "text" })
    answer_query!: string

    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at!: Date
}