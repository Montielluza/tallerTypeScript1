type Category = "tareas" | "quices" | "examen"

interface Grade {
    studentId: number,
    category: Category,
    score: number
}

function averageByCategory(grades: Grade[], studentId: number) {
    let sum = { tareas: 0, quices: 0, examen: 0 }
    let count = { tareas: 0, quices: 0, examen: 0 }

    grades.forEach(g => {
        if (g.studentId === studentId) {
            sum[g.category] += g.score
            count[g.category]++
        }
    })

    return {
        tareas: sum.tareas / (count.tareas || 1),
        quices: sum.quices / (count.quices || 1),
        examen: sum.examen / (count.examen || 1)
    }
}