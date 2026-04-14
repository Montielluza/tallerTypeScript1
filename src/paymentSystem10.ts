type Payment =
    | { method: "tarjeta", card: string, cvv: string }
    | { method: "transferencia", bank: string, account: string }
    | { method: "efectivo" }

function validatePayment(p: Payment): boolean {
    if (p.method === "tarjeta") {
        return !!p.card && !!p.cvv
    }
    if (p.method === "transferencia") {
        return !!p.bank && !!p.account
    }
    return true
}