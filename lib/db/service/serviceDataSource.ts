import "reflect-metadata"
import { DataSource } from "typeorm"
import getSslConfig from "../feature/_ds"

import { GuestUser } from "./entities/GuestUser"
import { SqlProblem } from "./entities/SqlProblem"

getSslConfig()

let _dataSource: DataSource | null = null

// 엔티티 새로 생성 시 반드시 추가해야 함
const entities = [
    GuestUser,
    SqlProblem,
]

export async function getServiceDataSource() {
    if(_dataSource && _dataSource.isInitialized) return _dataSource

    _dataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.MARKETTING_PROJECT_DB_NAME,
        username: process.env.DB_USER_APP,
        password: process.env.DB_PASS_APP,
        entities,
        synchronize: false,
        logging: false,
        ssl: getSslConfig()
    })

    if(!_dataSource.isInitialized) {
        await _dataSource.initialize()
    }

    return _dataSource
}