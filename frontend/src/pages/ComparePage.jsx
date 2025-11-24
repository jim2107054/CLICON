import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const ComparePage = () => {
  const navigate = useNavigate();
  const { compareList = [], removeFromCompare, addToCart } = useAppContext();

  if (compareList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
        <h2 className="text-3xl font-bold mb-4">No Products to Compare</h2>
        <p className="text-gray-600 mb-8">Add products to compare their features</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-btnColor text-white px-8 py-3 rounded-md hover:scale-105 transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 lg:px-36 py-10">
      <h1 className="text-3xl font-bold mb-8">Compare Products</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4 text-left font-semibold">Feature</th>
              {compareList.map((product) => (
                <th key={product.id} className="border p-4 text-center relative min-w-[250px]">
                  <button
                    onClick={() => removeFromCompare(product.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <IoClose className="text-2xl" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-32 h-32 object-contain mx-auto mb-3"
                  />
                  <p className="font-medium text-sm">{product.title}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4 font-semibold">Price</td>
              {compareList.map((product) => (
                <td key={product.id} className="border p-4 text-center">
                  <span className="text-xl font-bold text-btnColor">
                    ${product.price}
                  </span>
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-4 font-semibold">Rating</td>
              {compareList.map((product) => (
                <td key={product.id} className="border p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm">({product.rating})</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-4 font-semibold">Availability</td>
              {compareList.map((product) => (
                <td key={product.id} className="border p-4 text-center">
                  <span className={product.status === "In Stock" ? "text-green-600" : "text-red-600"}>
                    {product.status}
                  </span>
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-4 font-semibold">Action</td>
              {compareList.map((product) => (
                <td key={product.id} className="border p-4 text-center">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-btnColor text-white px-4 py-2 rounded hover:scale-105 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate(`/shop/${product.id}`)}
                      className="border border-btnColor text-btnColor px-4 py-2 rounded hover:scale-105 transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePage;
