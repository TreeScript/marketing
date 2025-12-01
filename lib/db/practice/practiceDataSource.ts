import { DataSource } from "typeorm"
import "reflect-metadata"
import getSslConfig from "../feature/_ds"
import { SqlProblem } from "../service/entities/SqlProblem"

let _dataSource: DataSource | null = null

export async function getPracticeDataSource() {
    if(_dataSource && _dataSource.isInitialized) return _dataSource

    _dataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.SQL_PROJECT_DB_NAME,
        username: process.env.DB_USER_APP,
        password: process.env.DB_PASS_APP,
        entities: [SqlProblem],
        synchronize: false,
        logging: false,
        ssl: getSslConfig()
    })

    if(!_dataSource.isInitialized) {
        await _dataSource.initialize()
        console.log(`[Practice DB] Connected`)
    }

    return _dataSource
}