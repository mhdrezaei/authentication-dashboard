import React from "react";

function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center w-1/3 h-1/2 space-y-5 round p-48 bg-accentCyan border-slate-300">
        <h3 className="w-60 text-darkBlue text-xl font-sans">
          Wellcome to MainBrain{" "}
        </h3>
        <input
          type="text"
          placeholder="Email"
          className="bg-darkBlue text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-darkBlue text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md"
        />

        <button
          type="submit"
          className="bg-accentBlue text-white text-lg rounded-md p-2 px-12 hover:opacity-80 hover:cursor-pointer hover:shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
