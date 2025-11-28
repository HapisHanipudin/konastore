// Terima props cartCount
const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold italic">KonaStore 🏸</h1>

        <ul className="flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-blue-200">Home</li>
          {/* Tampilkan angka dinamis */}
          <li className="cursor-pointer hover:text-blue-200">
            Cart ({cartCount})
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
