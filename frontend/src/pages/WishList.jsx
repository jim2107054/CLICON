import shopItems from "../assets/ShopItem";
import AddToWishList from "../components/AddToWishList";

const WishList = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 px-10 lg:px-36 py-10">
        <div className="flex flex-col h-fit pb-5 rounded border-2 border-gray-300 w-full">
          <p className="text-xl px-5 font-medium my-2">Wishlist</p>
          <div className="flex border-2 px-5 py-2 bg-gray-400 justify-evenly gap-2">
            <div className="w-[40%] flex justify-evenly">
              <p className="text-sm font-bold text-gray-700">PRODUCTS</p>
            </div>
            <div className="flex w-[60%] justify-between px-12 lg:px-16">
              <p className="text-sm font-bold text-gray-700">PRICE</p>
              <p className="text-sm font-bold text-gray-700">STOCK STATUS</p>
              <p className="text-sm font-bold text-gray-700">ACTIONS</p>
            </div>
          </div>
          <AddToWishList
            image={shopItems[0].image}
            title={shopItems[0].title}
            DiscountPrice={shopItems[0].price}
            status="In Stock"
          />
          <AddToWishList
            image={shopItems[1].image}
            title={shopItems[1].title}
            DiscountPrice={shopItems[1].price}
            OriginalPrice={2500}
            status="Out of Stock"
          />
          <AddToWishList
            image={shopItems[3].image}
            title={shopItems[3].title}
            DiscountPrice={shopItems[3].price}
            OriginalPrice={110}
            status="In Stock"
          />
          <AddToWishList
            image={shopItems[2].image}
            title={shopItems[2].title}
            DiscountPrice={shopItems[2].price}
            OriginalPrice={400}
            status="In Stock"
          />
        </div>
      </div>
    </div>
  );
};

export default WishList;
