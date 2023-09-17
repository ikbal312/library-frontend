'use server'
import { loginUser } from '@/lib/auth'
import { LogInSchemaType, LogInSchema } from '@/lib/schema'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function onLogInSubmit(formData: FormData) {

    const regData = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    const result = LogInSchema.safeParse(regData)
    if (!result.success) {
        redirect('/login')
    }
    const loggedIn = await loginUser(result.data)
    if (loggedIn) {
        revalidatePath('/login')  
        redirect('/book')
    }
    redirect('/register')
}

