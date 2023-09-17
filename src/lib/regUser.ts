import { UserRegType } from "./schema";
export const regUser = async (userData: UserRegType) => {
    const res = await fetch('http://localhost:8000/api/user/registration/', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
    if (!res.ok) { return false }
    return true
}