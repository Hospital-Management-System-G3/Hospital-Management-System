import React from "react";
import { Search } from "lucide-react";

const Header = () => (
  <header className="flex justify-between items-center mb-8">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-full bg-white border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
        size={18}
      />
    </div>
    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors">
      This Week ▼
    </button>
  </header>
);

export default Header;
