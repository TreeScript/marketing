import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Index,
} from "typeorm"

@Entity("admin_users")
export class AdminUser {
    @PrimaryGeneratedColumn()
    id!: number

    @Index({ unique: true })
    @Column({ type: "varchar", length: 50 })
    admin_id!: string

    @Column({ type: "varchar", length: 255 })
    password_hash!: string

    @Column({
        type: "enum",
        enum: ["admin", "superadmin"],
        default: "admin"
    })
    role!: "admin" | "superadmin"

    @CreateDateColumn()
    created_at!: Date
}