import AddToWishList from "../components/AddToWishList";
import { useAppContext } from "../context/AppContext";
import SEO from "../components/SEO";
import { PAGE_SEO } from "../config/seo.config";

const WishList = () => {
  const {
    cart,
    Total,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishList,
    removeFromWishList,
    wishList,
  } = useAppContext();
  return (
    <div>
      <SEO
        title={PAGE_SEO.wishlist.title}
        description={PAGE_SEO.wishlist.description}
        keywords={PAGE_SEO.wishlist.keywords}
        url={PAGE_SEO.wishlist.path}
        noindex={true}
      />
      <div className="flex flex-col lg:flex-row gap-5 px-1 md:px-10 lg:px-36 py-10">
        <div className="flex flex-col h-fit pb-5 rounded border-2 border-gray-300 w-full">
          <p className="text-xl px-5 font-medium my-2">Wishlist</p>
          <div className="flex border-2 py-2 bg-gray-400 justify-evenly gap-2">
            <div className="w-[40%] flex justify-evenly">
              <p className="text-sm font-bold text-gray-700">PRODUCTS</p>
            </div>
            <div className="flex w-[60%] md:gap-5">
              <p className="text-sm font-bold w-1/3 mx-auto text-center text-gray-700">
                PRICE
              </p>
              <p className="text-sm font-bold w-1/3 mx-auto text-center text-gray-700">
                STATUS
              </p>
              <p className="text-sm font-bold w-1/3 mx-auto text-center text-gray-700">
                ACTIONS
              </p>
            </div>
          </div>
          {wishList.length > 0 ? (
            wishList
              .slice(0, 5)
              .map((product) => (
                <AddToWishList
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  removeFromWishList={removeFromWishList}
                />
              ))
          ) : (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
