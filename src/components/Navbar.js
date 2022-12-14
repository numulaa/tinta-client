import React from "react";
import "../styles/css/main.css";
import "../App.css";

export default function Navbar({ minimal, authToken, setShowModal, showModal, setIsSignUp }) {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

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
         {!authToken && !minimal && (
         <button 
          className="bg-white text-brightOrange text-md font-semibold rounded-md py-2.5 px-5"
          onClick={handleClick}
          disabled={showModal}
         >
          Sign In
        </button>
        )}
        
      </nav>
    </header>
  );
}
