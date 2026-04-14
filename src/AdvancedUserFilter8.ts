type Role = "admin" | "editor" | "visitante"

interface User {
    name: string,
    age: number,
    active: boolean,
    role: Role
}

function filterUsers(users: User[]): User[] {
    return users.filter(u =>
        u.age >= 18 && u.active && u.role !== "visitante"
    )
}