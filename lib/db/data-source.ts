import "reflect-metadata"
import { DataSource } from "typeorm"
import fs from "node:fs"

import { GuestUser } from "./entities/GuestUser"

let _dataSource: DataSource | null = null

function getSslConfig() {
    const caFromPath = process.env.DB_CA_CERT_PATH
        ? fs.readFileSync(process.env.DB_CA_CERT_PATH, "utf-8")
        : undefined

    const caFromEnv = process.env.DB_CA_CERT

    if(caFromPath || caFromEnv) {
        return {
            ca: caFromPath ?? caFromEnv
        }
    }
    return undefined
}

const entities = [
    GuestUser,
]

export async function getAppDataSource() {
    if(_dataSource && _dataSource.isInitialized) return _dataSource

    _dataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
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