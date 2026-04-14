type TransactionType = "ingreso" | "egreso"

interface Transaction {
    amount: number,
    type: TransactionType,
    category: string
}

function groupTransactions(transactions: Transaction[]) {
    let result = { ingreso: 0, egreso: 0 }

    return transactions.reduce((acc, t) => {
        acc[t.type] += t.amount
        return acc
    }, result)
}
