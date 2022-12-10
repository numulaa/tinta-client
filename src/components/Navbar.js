import React from "react";
import "../styles/css/main.css";
import "../App.css";

export default function Navbar() {
  return (
    <header className="h-20">
      <nav className="flex justify-between px-12 py-4 align-center">
        <div className="flex justify-between">
          <img
            src="./new-logo-white.svg"
            alt="logo"
            className="max-w-100% h-12"
          />
        </div>
        <button className="bg-white text-brightOrange text-md font-semibold rounded-md py-2.5 px-5">
          Login
        </button>
      </nav>
    </header>
  );
}
