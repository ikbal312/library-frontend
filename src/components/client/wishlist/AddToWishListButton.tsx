'use client'
import {addToWishlist} from "@/lib/wishlist"
export default function AddToWishListButton({ id }: { id: BookId }) {
    return (
        <button className="btn " onClick={async () => {
            
            
            await addToWishlist(id) }}>Wishlist</button>
    )
}
