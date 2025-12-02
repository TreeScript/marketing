import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    JoinColumn
} from "typeorm"
import { AdminUser } from "./AdminUser"

@Entity("admin_sessions")
export class AdminSession {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => AdminUser)
    @JoinColumn({ name: "admin_id" })
    admin!: AdminUser

    @Column({ type: "varchar", length: 255 })
    session_token!: string

    @CreateDateColumn()
    created_at!: Date

    @Column({ type: "timestamp" })
    expires_at!: Date
}