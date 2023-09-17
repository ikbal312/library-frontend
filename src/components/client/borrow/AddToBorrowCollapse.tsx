"use client";
import addToBorrow from "@/lib/borrow";
import { useRef } from "react";
export default function AddToBorrowCollapse({ id }: { id: BookId }) {
  const inputRef = useRef(0);
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-md font-medium text-center">Click To Borrow</div>
      <div className="collapse-content">
   
        <input  ref={inputRef} type="number" placeholder="borrow duration" className="input input-xs input-bordered " />
        <button onClick={async () => {
            let value = inputRef.current.value
            await addToBorrow({ book: id, duration: value })
          }}
            className="btn btn-sm btn-primary  ml-2">
            Submit
          </button>
      </div>
    </div>
  );
}
