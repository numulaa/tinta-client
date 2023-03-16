import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthModal({ isSignUp, setShowModal }) {
  let navigate = useNavigate();
  const [authFormData, setAuthFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setAuthFormData((prevAuthFormData) => ({
      ...prevAuthFormData,
      [name]: value,
    }));
  }
  function closeAuth() {
    setShowModal(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    console.log("submitted");

    try {
      const response = await axios.post(
        `http://localhost:8000/${isSignUp ? "signup" : "login"}`,
        { email: authFormData.email, password: authFormData.password }
      );
      const success = response.status === 201;
      if (success) navigate("/onboarding");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute left-0 right-0 ml-auto mr-auto max-w-2xl h-xl px-20 py-16 bg-white rounded-2xl ">
      <div
        className="absolute right-8 top-8 cursor-pointer"
        onClick={closeAuth}
      >
        X
      </div>
      <h1 className="font-bold mb-8">CREATE ACCOUNT</h1>
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
        <p className="text-sm">
          By clicking Log In / Create Account, you agree to our terms. Learn how
          we process your data in our Privacy Policy and Cookie Policy
        </p>
        <button className="p-3 rounded-md bg-brightOrange text-white cursor-pointer mt-4">
          {isSignUp ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
}
