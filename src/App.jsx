import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products"; // Import data dummy

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Panggil Navbar */}
      <Navbar />

      {/* 2. Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Merch</h2>
          <p className="mt-1 text-gray-500">Koleksi terbaik dari Ao no Hako</p>
        </div>

        {/* 3. Product Grid & Looping */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            // Panggil Component Card & lempar data sebagai props
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
