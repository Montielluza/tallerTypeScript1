type notification =
    | { type: "email", address: string }
    | { type: "sms", phone: string }
    | { type: "push", deviceId: string }

function sendNotification(n: notification): void {
    if (n.type === "email") {
        console.log(n.address)
    } else if (n.type === "sms") {
        console.log(n.phone)
    } else {
        console.log(n.deviceId)
    }
}