import "reflect-metadata"
import fs from "node:fs"

export default function getSslConfig() {
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