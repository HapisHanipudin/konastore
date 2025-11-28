// src/components/Navbar.jsx
const Navbar = ({ cartCount, onViewChange }) => {
  // Terima props onViewChange
  return (
    <nav className="sticky top-0 z-50 bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo klik lari ke Home */}
        <h1
          onClick={() => onViewChange("home")}
          className="cursor-pointer text-2xl font-bold italic"
        >
          KonaStore 🏸
        </h1>

        <ul className="flex gap-6 font-medium">
          <li
            onClick={() => onViewChange("home")}
            className="cursor-pointer transition-colors hover:text-blue-200"
          >
            Home
          </li>
          <li
            onClick={() => onViewChange("cart")}
            className="cursor-pointer transition-colors hover:text-blue-200"
          >
            Cart ({cartCount})
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
