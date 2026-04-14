type FieldType = "texto" | "numero" | "email"

interface Field {
    name: string,
    type: FieldType,
    value: string | number
}

function validateFields(fields: Field[]): string[] {
    return fields
        .filter(f =>
            (f.type === "numero" && typeof f.value !== "number") ||
            (f.type === "texto" && typeof f.value !== "string") ||
            (f.type === "email" && typeof f.value !== "string")
        )
        .map(f => f.name)
}