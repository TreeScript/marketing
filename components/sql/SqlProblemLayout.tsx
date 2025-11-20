"use client"

import { SqlProblemStyles } from "./SqlProblem.style"
import { Button } from "../ui/Button"
import { useState } from "react"
import { Editor } from "@monaco-editor/react"

type SqlProblemProps = {
    problem: {
        title: string
        description: string
        difficulty: string
        tags: string[]
        exampleSchema: Record<string, string[]>
    }
    onRunQuery: (sql: string) => Promise<{
        columns: string[]
        rows: any[][]
    }>
}

export function SqlProblemLayout({
    problem,
    onRunQuery
}: SqlProblemProps) {

    const [sql, setSql] = useState("")
    const [result, setResult] = useState<null | {
        columns: string[]
        rows: any[][]
    }>(null)

    const run = async () => {

        try {
            const result = await fetch(`/api/sql/execute`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sql })
            })

            const data = await result.json()
            if(data.error) {
                alert(`SQL Error: ${data.error}`)
                return
            }
            setResult({
                columns: data.columns,
                rows: data.rows
            })
        }catch(error: any) {
            alert(`오류가 발생했습니다.`)
            console.error(error)
        }
    }

    return (
        <SqlProblemStyles.Wrap>
            <SqlProblemStyles.Left>
                <SqlProblemStyles.Title>{problem.title}</SqlProblemStyles.Title>
                {Object.entries(problem.exampleSchema).map(([table, cols]) => (
                    <div key={table} style={{ marginBottom: 12 }}>
                        <strong style={{ color: "#0f172a" }}>{table}</strong>
                        <ul style={{ marginTop: 6, paddingLeft: 20 }}>
                            {cols.map((c) => (
                                <li key={c} style={{ color: "#475569", fontSize: 13 }}>{c}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </SqlProblemStyles.Left>

            <SqlProblemStyles.Right>
                <Editor
                    height="260px"
                    defaultLanguage="sql"
                    theme="vs-light"
                    value={sql}
                    onChange={(v) => setSql(v ?? "")}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 13,
                        fontFamily: "JetBrains Mono, Consolas, monospace",
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        wordWrap: "on"
                    }}
                />
                    <SqlProblemStyles.RunButtonArea>
                        <Button
                            size="sm"
                            onClick={run}
                        >
                            실행하기
                        </Button>
                    </SqlProblemStyles.RunButtonArea>

                    {result && (
                        <SqlProblemStyles.Table>
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
                        </SqlProblemStyles.Table>
                    )}                
            </SqlProblemStyles.Right>
        </SqlProblemStyles.Wrap>

    )
}