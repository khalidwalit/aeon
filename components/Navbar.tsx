// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex space-x-6">
        <a href="/" className="text-gray-800 font-semibold">
          AEON
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-800">
          Showcase
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-800">
          Docs
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-800">
          Blog
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-800">
          Analytics
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-800">
          Templates
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-800">
          Enterprise
        </a>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-[300px] px-4 py-2 bg-gray-100 rounded-md  focus:outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
