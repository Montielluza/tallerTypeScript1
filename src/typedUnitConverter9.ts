type Unit = "cm" | "m" | "km"

function convert(value: number, from: Unit, to: Unit): number {
    let meters = value

    if (from === "cm") meters = value / 100
    if (from === "km") meters = value * 1000

    if (to === "cm") return meters * 100
    if (to === "km") return meters / 1000

    return meters
}