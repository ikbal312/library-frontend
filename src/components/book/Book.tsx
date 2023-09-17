
import React from "react"
export default function BookInfoCard({ children, id }: { children: React.ReactNode, id: string }) {

    return (
        <section className="card card-normal shadow-xl   ">
            {children}
        </section>
    )
}

