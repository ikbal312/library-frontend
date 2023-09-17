'use client'
import addToReservation from "@/lib/reservation"

export default function AddToResevationButton({ id }: { id: BookId }) {
    return (
        <button onClick={async () => { await addToReservation(id) }} 
        className="btn ">
          Resevation
        </button>
    )
}
