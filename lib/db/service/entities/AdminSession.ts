import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn
} from "typeorm"
import { AdminUser } from "./AdminUser"

@Entity("admin_sessions")
export class AdminSession {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => AdminUser)
    admin!: AdminUser

    @Column({ type: "varchar", length: 255 })
    session_token!: string

    @Column({ type: "varchar", length: 255, nullable: true })
    user_agent!: string | null

    @Column({ type: "varchar", length: 64, nullable: true })
    ip_address!: string | null

    @CreateDateColumn()
    created_at!: Date

    @Column({ type: "timestamp" })
    expires_at!: Date
}