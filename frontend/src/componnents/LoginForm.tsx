import axios from "axios";
import { type } from "os";
import React, { useState } from "react";

type formState = {
  email: string;
  password: string;
};
function LoginForm() {
  const [formData, setFormData] = useState<formState>({
    email: "",
    password: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:5000/api/users/login", formData)
      .then((response) => {
        const data = response.data;
        const convertedData = JSON.stringify(data);

        //set JWT token to local
        localStorage.setItem("user", convertedData );

        //set token to axios common header
        //  setAuthToken(token);

        //redirect user to home page
        // window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setFormData((prevState) => {
      return {
        ...prevState,
        [target.id]: target.value,
      };
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-1/3 h-1/2 space-y-5 round p-48 bg-accentCyan border-slate-300"
      >
        <h3 className="w-60 text-darkBlue text-xl font-sans">
          Wellcome to MainBrain
        </h3>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className="bg-darkBlue text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md"
          onChange={onChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="bg-darkBlue text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md"
          onChange={onChange}
        />

        <button className="bg-accentBlue text-white text-lg rounded-md p-2 px-12 hover:opacity-80 hover:cursor-pointer hover:shadow-md">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
