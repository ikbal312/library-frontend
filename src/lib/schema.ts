import z, { TypeOf, object, string } from "zod"

export const BookSchema = object({
    title: string({ required_error: "Book title is required" }).trim().min(1, {
        message: 'title must be atleast 1 character long'
    }).max(125),
    author: string({ required_error: "Book title is required" }).trim().min(1, {
        message: 'author must be atleast 1 character long'
    }).max(125),
    isbn: string().trim().length(13),
    genre: string().trim().min(1).max(125),
    publicationDate: string().trim(),
    stock: string().trim(),
    image: z.custom<File>()

})
export type BookSchemaType = TypeOf<typeof BookSchema>

export const UserRegSchema = object({
    firstName: string(),
    lastName: string(),
    email: string({ required_error: "email required" }).trim().email(),
    password: string({ required_error: "password required" })

})
export type UserRegType = TypeOf<typeof UserRegSchema>




export const LogInSchema = object({
    email: string({ required_error: "email required" }).trim().email(),
    password: string({ required_error: "password required" })
})
export type LogInSchemaType = TypeOf<typeof LogInSchema>