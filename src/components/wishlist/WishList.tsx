'use server'
import getWishlist from "@/lib/wishlist";
import DeleteFromWishlishButton from "../client/wishlist/DeleteFromWishlishButton";

export default  async function WishList() {
    const { ok, data } = await getWishlist();
  
    const slots = data.map((wish: Book) => (
      <WishlistSlot
        key={wish.id}
        data={{
          id: wish.id,
          shortMessage: wish.title,
          longMessage: wish.author,
        }}
      />
    ));
    const wishList = ok ? (
      <div className="hidden peer-checked:flex mt-3 z-[0] card  dropdown-content w-max bg-base-100 shadow bg-accent ">
        {slots}
      </div>
    ) : (
      <></>
    );
  
    return wishList;
  }

  type Slot = {
    id: string;
    shortMessage: string;
    longMessage: string;
  };
  function WishlistSlot({ data }: { data: Slot }) {
    return (
      <div
        tabIndex={0}
        className="collapse  bg-primary text-primary-content hover:bg-secondary hover:text-secondary-content m-1 "
      >
        <div className="collapse-title">{data.shortMessage}</div>
        <div className="flex collapse-content">
          <p>{data.longMessage}</p>
          <DeleteFromWishlishButton id={data.id} />
        </div>
      </div>
    );
  }
  