'use server'
import afetch from "./afetch"
const source = 'api/services/borrow/'
export default async function addToBorrow({ book, duration }: Borrow) {
    const body = JSON.stringify({ 'book': book, 'duration': duration })
    
    const res = await afetch(source, { method: "POST", body: body })
    if (!res.ok) return false
    return true
}

