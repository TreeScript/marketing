export type SqlQueryResult = {
    columns: string[]
    rows: any[][]
}

export function compareSqlResult(
    user: SqlQueryResult,
    answer: SqlQueryResult
): boolean {

    if(user.columns.length !== answer.columns.length) return false
    for(let i = 0; i < user.columns.length; i++) {
        if(user.columns[i] !== answer.columns[i]) return false
    }

    if(user.rows.length !== answer.rows.length) return false
    for(let row = 0; row < user.rows.length; row++) {
        const userRows = user.rows[row]
        const anwerRows = answer.rows[row]

        if(userRows.length !== anwerRows.length) return false

        for(let column = 0; column < userRows.length; column++) {
            if(String(userRows[column]) !== String(anwerRows[column])) return false
        }
    }

    return true
}

export function sqlNormalize(raw: any[]): {
    columns: string[]
    rows: any[][]
} {
    if(raw.length === 0) return { columns: [], rows: [] }

    const columns = Object.keys(raw[0])
    const rows = raw.map((row) => Object.values(row))

    return { columns, rows }
}