import React from "react";
import { useState } from "react";

export default function AuthModal({ isSignUp, setShowModal }) {
  const [authFormData, setAuthFormData] = useState({
    userName: "",
    emai: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    const [name, value] = e.target;
    setAuthFormData((prevAuthFormData) => ({
      ...prevAuthFormData,
      [name]: value,
    }));
  }
  function closeAuth() {
    setShowModal(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <div className="absolute left-0 right-0 ml-auto mr-auto max-w-2xl h-xl px-20 py-16 bg-white rounded-2xl ">
      <div
        className="absolute right-8 top-8 cursor-pointer"
        onClick={closeAuth}
      >
        X
      </div>
      <form
        className="flex flex-col justify-between gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="userName"
          value={authFormData.userName}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={authFormData.email}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={authFormData.password}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        {!isSignUp && (
          <input
            type="text"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={authFormData.confirmPassword}
            className="rounded-md p-3 border-solid border-2 border-gray"
          ></input>
        )}
        <button className="p-3 rounded-md bg-brightOrange text-white cursor-pointer mt-4">
          {isSignUp ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
}
