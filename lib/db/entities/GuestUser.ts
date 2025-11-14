import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Index,
} from "typeorm"

@Entity("guest_users")
export class GuestUser {

    @PrimaryGeneratedColumn()
    idx!: number

    @Column({ type: "varchar", length, unique: true })
    id!: string

    @Column({ type: "varchar", length: 20, default: "guest" })
    role!: string

    @CreateDateColumn({ name: "creeate_at", type: "datetime" })
    createdAt!: Date

    @Column({
        name: "last_active_at",
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP",
    })
    lastActiveAt!: Date

    @Index("ix_guest_expires_at")
    @Column({ name: "expires_at", type: "datetime" })
    expiresAt!: Date

    @Column({ name: "user_agent", type: "varchar", length: 255, nullable: true })
    userAgent?: string | null

    @Column({ name: "ip_address", type: "varchar", length: 45, nullable: true })
    ipAddress?: string | null
}