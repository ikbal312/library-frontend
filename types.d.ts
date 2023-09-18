type User = {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

type Post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}

type Book = {
  "id": string,
  "title": string,
  "author": string,
  "isbn": string,
  "publication_date": string,
  "genre": string,
  "stock": number,
  "status": string,
  'image': string
}

type ResponseStatus = {
  status: 'success' | 'error'
  message: string
}
type JWTToken = {
  refresh: string,
  access: string,
}


type BookId = string
type BookTitle = string
type BorrowedAt = string
type LastDate = string
type Fine = string

type Borrow = {
  "book": BookId,
  "duration": number
}
type Reminder = {
  "book_title": BookTitle,
  "borrowed_at": BorrowedAt,
  "last_date": LastDate,
  "fine": Fine
}

type Profile ={
  first_name:string,
  last_name:string,
  email?:string
}