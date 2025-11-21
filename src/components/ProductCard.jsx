// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Gambar */}
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-48 w-full rounded-md object-cover"
      />

      {/* Info Produk */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold tracking-wider text-blue-500 uppercase">
          {product.category}
        </span>
        <h3 className="text-lg leading-tight font-bold text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        {/* Tombol */}
        <button className="mt-2 w-full rounded-lg bg-gray-900 py-2 text-white transition-all hover:bg-gray-700 active:scale-95">
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
