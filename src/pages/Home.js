import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const authToken = false;
  return (
    <div>
      <Navbar />
      <main className="home-main">
        <h1 className="home-title">Swipe Right</h1>
        <button>{authToken ? "Signout" : "Create Account"}</button>
      </main>
    </div>
  );
}
