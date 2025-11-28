// Terima props onAddToCart
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-48 w-full rounded-md object-cover"
      />

      <div className="flex flex-grow flex-col gap-2">
        <span className="text-xs font-bold tracking-wider text-blue-500 uppercase">
          {product.category}
        </span>
        <h3 className="text-lg leading-tight font-bold text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>

      {/* Pasang onClick handler */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full cursor-pointer rounded-lg bg-gray-900 py-2 text-white transition-all hover:bg-gray-700 active:scale-95"
      >
        + Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
