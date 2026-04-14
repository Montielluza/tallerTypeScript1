type CategoryProduct = "alimentos" | "tecnologia" | "papeleria"

interface Product {
    id: number,
    name: string,
    quantity: number,
    category: CategoryProduct
}

function isLowStock(p: Product): boolean {
    if (p.category === "alimentos") return p.quantity < 20
    if (p.category === "tecnologia") return p.quantity < 5
    return p.quantity < 50
}