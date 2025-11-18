import { GuestUser } from "./entities/GuestUser"
import { getAppDataSource } from "./data-source"

const GUEST_TTL_MINUTES = 30

function calcExpiresAt(): Date {
    const now = new Date()
    now.setMinutes(now.getMinutes() + GUEST_TTL_MINUTES)

    return now
}

async function getGuestRepo() {
    const ds = await getAppDataSource()

    return ds.getRepository(GuestUser)
}

export async function createGuest(opts?: {
    userAgent?: string
    ipAddress?: string
}): Promise<GuestUser> {
    const repo = await getGuestRepo()

    const guest = repo.create({
        id: "",
        role: "guest",
        lastActiveAt: new Date(),
        expiresAt: calcExpiresAt(),
        userAgent: opts?.userAgent ?? null,
        ipAddress: opts?.ipAddress ?? null,
    })

    const saved = await repo.save(guest)
    const paddedIdx = String(saved.idx).padStart(3, "0")
    saved.id = `GUEST_${paddedIdx}`

    return await repo.save(saved)
}

export async function touchGuestActivity(idx: number): Promise<void> {
    const repo = await getGuestRepo()
    await repo.update(
        { idx },
        {
            lastActiveAt: new Date(),
            expiresAt: calcExpiresAt(),
        }
    )
}

export async function deleteGuestByIdx(idx: number): Promise<void> {
    const repo = await getGuestRepo()
    await repo.delete({ idx })
}

export async function findGuestById(id: string): Promise<GuestUser | null> {
    const repo = await getGuestRepo() 

    return await repo.findOne({ where: { id } })
}

export async function findGuestByIdx(idx: number): Promise<GuestUser | null> {
    const repo = await getGuestRepo()

    return await repo.findOne({ where: { idx } })
}

export async function touchGuestSession(idx: number) {
    const repo = await getGuestRepo()

    const guest = await repo.findOne({ where: { idx } })
    if(!guest) {
        return { expired: true as const, guest: null }
    }

    const now = new Date()

    if(guest.expiresAt && guest.expiresAt.getTime() <= now.getTime()) {
        await repo.delete({ idx })

        return { expried: true as const, guest: null }
    }

    const newExpries = new Date(now.getTime() + GUEST_TTL_MINUTES * 60 * 1000)

    guest.lastActiveAt = now
    guest.expiresAt = newExpries

    const updated = await repo.save(guest)

    return { expired: false as const, guest: updated }
}