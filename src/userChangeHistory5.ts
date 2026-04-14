type ChangeType = "nombre" | "correo" | "password"

interface Change {
    type: ChangeType
}

function countChanges(changes: Change[]) {
    let result = { nombre: 0, correo: 0, password: 0 }

    changes.forEach(c => result[c.type]++)

    return result
}