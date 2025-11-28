import { useState } from "react"; // 1. Import useState
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  // 2. Setup State
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 3. Fungsi Tambah ke Keranjang
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} berhasil ditambahkan!`); // Feedback simple (bisa diganti toast nanti)
  };

  // 4. Logic Filter Produk
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // Ambil list unik kategori untuk tombol filter
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <dbiv className="min-h-screen bg-gray-50 font-sans">
      {/* Kirim jumlah cart ke Navbar */}
      <Navbar cartCount={cart.length} />

      <main className="container mx-auto px-4 py-10">
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Merch</h2>
            <p className="mt-1 text-gray-500">
              Koleksi terbaik dari Ao no Hako
            </p>
          </div>

          {/* 5. Tombol Filter Kategori */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Render Produk yang sudah difilter */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={handleAddToCart} // Kirim fungsi ke child
            />
          ))}
        </div>
      </main>
    </dbiv>
  );
}

export default App;
