import React, { useState, useContext } from "react";
import UserContext, { userContextType } from "../context/userContext";

type formState = {
  email: string;
  password: string;
};
function LoginForm() {
  const { login } = useContext(UserContext) as userContextType;
  const [formData, setFormData] = useState<formState>({
    email: "",
    password: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(formData);
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
    <section className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-darkBlue to-accentBlue">

    <div className="flex items-center justify-start w-2/3 h-1/2 rounded-md shadow-md  login-form">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start w-1/2  space-y-5  border-slate-300"
        >
        <h3 className=" text-darkBlue text-4xl font-sans">
          Wellcome to MainBrain
        </h3>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className=" text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md"
          onChange={onChange}
          />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className=" text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md"
          onChange={onChange}
          />

        <button className="bg-accentBlue text-white text-lg rounded-md p-2 px-12 hover:opacity-80 hover:cursor-pointer hover:shadow-md">
          Login
        </button>
      </form>
    </div>
          </section>
  );
}

export default LoginForm;
