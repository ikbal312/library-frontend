'use server'
import afetch from "./afetch"
const source = 'api/services/reservation/'
export default async function addToReservation(id: BookId) {
    const body = JSON.stringify({ 'book': id })
    const res = await afetch(source, { method: "POST", body: body })
    if (!res.ok) return false
    return true
}

