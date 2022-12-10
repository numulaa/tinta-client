import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

import "../styles/css/main.css";
import "../styles/src/input.css";
import "../App.css";

export default function Home() {
  const authToken = false;
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    setShowModal((prevShowModal) => (prevShowModal = true));
  }
  return (
    <div className="overlay">
      <Navbar />
      <main className="text-center flex flex-col align-center mt-[30vh] gap-8 justify-center">
        <h1 className="text-7xl">Swipe Right®</h1>
        <button
          onClick={handleClick}
          className="bg-brightOrange w-1/6 rounded-full self-center py-2"
        >
          {authToken ? "Signout" : "Create Account"}
        </button>
        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </main>
    </div>
  );
}
