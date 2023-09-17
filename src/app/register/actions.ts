'use server'
import { UserRegSchema } from '@/lib/schema'
import { regUser } from '@/lib/regUser'
import { redirect } from 'next/navigation'

export default async function onRegisterSubmit(formData: FormData) {
    const regData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password')
    }
    const result = UserRegSchema.safeParse(regData)
    if (!result.success){
        redirect('/register')
    }
    const registered = await regUser(result.data)
    if(registered){
        redirect('/login')
    }
    redirect('/register')
    
}
