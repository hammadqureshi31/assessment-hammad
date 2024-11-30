import React from "react";
import Button from "./Button";

const Header = () => {
  const navigation = ["Home", "About", "Services", "Events"];
  return (
    <header className="bg-[#d9d9d9] shadow-md absolute z-40 top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="./image 1.png"
            alt="Logo"
            className="w-40 h-40 object-contain"
          />
          </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((nav, index) => (
            <a
              key={index}
              href={`#${nav.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              {nav}
            </a>
          ))}
        </nav>

        {/* Button Section */}
        <div className="flex items-center space-x-4">
          <Button
            classes="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            text="Log in"
          />
          <Button
            classes="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
            text="Sign up"
          />
        </div>
      </div>

      {/* Responsive Navigation */}
      <div className="md:hidden flex flex-col items-start space-y-2 px-4 py-2">
        {navigation.map((nav, index) => (
          <a
            key={index}
            href={`#${nav.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            {nav}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
