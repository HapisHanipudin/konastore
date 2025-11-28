import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer"; // Import Footer
import { products } from "./data/products";

function App() {
  // --- STATE MANAGEMENT ---
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [view, setView] = useState("home"); // State untuk pindah halaman ('home' atau 'cart')

  // --- LOGIC FUNCTIONS ---

  // 1. Tambah ke Cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} masuk keranjang!`);
  };

  // 2. Filter Produk
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // 3. Ambil Kategori Unik
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // 4. Hitung Total Harga
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      {/* Navbar nerima prop untuk navigasi & jumlah cart */}
      <Navbar cartCount={cart.length} onViewChange={setView} />

      <main className="container mx-auto flex-grow px-4 py-10">
        {/* --- TAMPILAN HOME --- */}
        {view === "home" ? (
          <>
            <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Featured Merch
                </h2>
                <p className="mt-1 text-gray-500">
                  Koleksi terbaik dari Ao no Hako
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </>
        ) : (
          /* --- TAMPILAN CART --- */
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-2xl font-bold">Keranjang Belanja</h2>

            {cart.length === 0 ? (
              <div className="rounded-lg border border-gray-100 bg-white py-10 text-center shadow-sm">
                <p className="text-gray-500">Keranjangmu masih kosong nih.</p>
                <button
                  onClick={() => setView("home")}
                  className="mt-4 font-medium text-blue-600 hover:underline"
                >
                  Belanja dulu yuk!
                </button>
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <ul className="divide-y divide-gray-100">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {item.name}
                          </h4>
                          <span className="text-xs font-medium text-blue-500 uppercase">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-700">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-6">
                  <span className="text-lg font-medium text-gray-600">
                    Total Pembayaran
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
