"use client"

import { SqlProblemStyles } from "./SqlProblem.style"
import { Button } from "../ui/Button"
import { useState } from "react"
import { Editor } from "@monaco-editor/react"

type ColumnDef = {
    name: string
    type: string
    description: string
}
type TableSchema = {
    columns: ColumnDef[]
}
type ExampleSchema = Record<string, TableSchema>

type SqlProblemProps = {
    problem: {
        title: string
        description: string
        difficulty: string
        category: string
        tags: string[]
        exampleSchema: ExampleSchema
        businessRules: string[] | Record<string, any>
        expectedOutputSchema: any
        sampleOutput: any[][]
        answerQuery: string
    }
    onRunQuery: (sql: string) => Promise<{
        columns: string[]
        rows: any[][]
        error?: string
    }>
}

export function SqlProblemLayout({
    problem,
    onRunQuery
}: SqlProblemProps) {

    const [sql, setSql] = useState("")
    const [result, setResult] = useState<null | {
        columns: string[],
        rows: any[][]
    }>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const run = async () => {
        setLoading(true)
        setError(null)
        setResult(null)

        const _result = await onRunQuery(sql)
        if(_result.error) {
            setError(_result.error)
        }else if(_result.columns && _result.rows) {
            setResult(_result)
        }

        setLoading(false)
    }

    const rules = Array.isArray(problem.businessRules)
        ? problem.businessRules
        : Object.values(problem.businessRules)

    return (
        <SqlProblemStyles.PageWrap>
            <SqlProblemStyles.Left>
                <SqlProblemStyles.Title>
                    {problem.title}
                </SqlProblemStyles.Title>
                
                <SqlProblemStyles.BadgeWrap>
                    <SqlProblemStyles.DifficultyBadge $level={problem.difficulty}>
                        {problem.difficulty}
                    </SqlProblemStyles.DifficultyBadge>
                    <SqlProblemStyles.CategoryBadge>
                        {problem.category}
                    </SqlProblemStyles.CategoryBadge>
                </SqlProblemStyles.BadgeWrap>

                <SqlProblemStyles.Description>
                    {problem.description}
                </SqlProblemStyles.Description>

                <SqlProblemStyles.TagWrap>
                    {(problem.tags ?? []).map((tag) => (
                        <SqlProblemStyles.Tag key={tag}>
                            {tag}
                        </SqlProblemStyles.Tag>
                    ))}
                </SqlProblemStyles.TagWrap>

                <SqlProblemStyles.SectionTitle>📘 사용 테이블 구조</SqlProblemStyles.SectionTitle>
                <SqlProblemStyles.SchemaArea>
                    <SqlProblemStyles.SchemaArea>
                        {Object.entries(problem.exampleSchema).map(([table, schema]) => (
                                <SqlProblemStyles.SchemaCard key={table}>
                                <SqlProblemStyles.SchemaHeader>
                                    <SqlProblemStyles.SchemaTableName>{table}</SqlProblemStyles.SchemaTableName>
                                    <SqlProblemStyles.SchemaBadge>table</SqlProblemStyles.SchemaBadge>
                                </SqlProblemStyles.SchemaHeader>

                                <SqlProblemStyles.SchemaTable>
                                    <thead>
                                        <tr>
                                            <th>Column</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schema.columns.map((col: any) => (
                                            <tr key={col.name}>
                                                <td>{col.name}</td>
                                                <td>{col.type}</td>
                                                <td>{col.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </SqlProblemStyles.SchemaTable>
                            </SqlProblemStyles.SchemaCard>
                        ))}
                    </SqlProblemStyles.SchemaArea>
                </SqlProblemStyles.SchemaArea>
                
                <SqlProblemStyles.SectionTitle>📌 비즈니스 룰</SqlProblemStyles.SectionTitle>
                <SqlProblemStyles.RuleList>
                    {rules.map((rule, i) => (
                        <SqlProblemStyles.RuleItem key={i}>
                            {rule}
                        </SqlProblemStyles.RuleItem>
                    ))}
                </SqlProblemStyles.RuleList>

                <SqlProblemStyles.SectionTitle>📤 예상 출력 스키마</SqlProblemStyles.SectionTitle>
                <SqlProblemStyles.SchemaCard>
                    <ul>
                        {problem.expectedOutputSchema.columns?.map((col: string) => (
                            <li key={col}>{col}</li>
                        ))}
                    </ul>
                </SqlProblemStyles.SchemaCard>

                <SqlProblemStyles.SectionTitle>📊 샘플 출력</SqlProblemStyles.SectionTitle>
                <SqlProblemStyles.TableBox> 
                    <table>
                        <thead>
                            <tr>
                                {problem.expectedOutputSchema.columns?.map((col: string) => (
                                    <th key={col}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {problem.sampleOutput.map((row, idx) => (
                                <tr key={idx}>
                                    {row.map((val, i) => (
                                        <td key={i}>{String(val)}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </SqlProblemStyles.TableBox>
            </SqlProblemStyles.Left>

            <SqlProblemStyles.Right>
                <Editor
                    height="300px"
                    defaultLanguage="sql"
                    theme="vs-dark"
                    value={sql}
                    onChange={(v) => setSql(v ?? "")}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        fontFamily: "JetBrains Mono, Consolas",
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        wordWrap: "on",
                        tabSize: 4
                    }}
                />
                    <SqlProblemStyles.RunButtonArea>
                        <Button
                            size="sm"
                            disabled={loading}
                            onClick={run}
                        >
                            {loading ? "실행 중" : "실행하기"}
                        </Button>
                    </SqlProblemStyles.RunButtonArea>

                    {error && (
                        <SqlProblemStyles.ErrorBox>
                            {error}
                        </SqlProblemStyles.ErrorBox>
                    )}

                    {result && (
                        <SqlProblemStyles.TableBox>
                            <table>
                                <thead>
                                    <tr>
                                        {result.columns.map((col) => (
                                            <th key={col}>{col}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.rows.map((row, idx) => (
                                        <tr key={idx}>
                                            {row.map((value, i) => (
                                                <td key={i}>{String(value)}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </SqlProblemStyles.TableBox>
                    )}                
            </SqlProblemStyles.Right>
        </SqlProblemStyles.PageWrap>

    )
}