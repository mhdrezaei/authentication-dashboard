import React, { useState, useContext } from "react";
import UserContext, { userContextType } from "../context/userContext";
import { toast } from 'react-toastify';
import emailValidation from "../helper/email-validation";
import Spinner from "./common/Spinner";


type formState = {
  email: string;
  password: string;
};
function LoginForm() {
  const { login , isLoading , loading } = useContext(UserContext) as userContextType;
  const [formData, setFormData] = useState<formState>({
    email: "",
    password: "",
  });
  const [hasError , setHasError] = useState({hasEmailError : false , okEmail : false ,emailError : "input-error" ,hasPasswordError : false , okPassword : false ,passwordError : "input-error"})
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loading(true)
    if(formData.email === "" || formData.email.trim() === "" || formData.password === ""){
      toast.error('All field are necessary!',{
        position: "bottom-center",
        theme: "colored"
      })
      setHasError((prevState) =>{
        return {...prevState , hasEmailError : true , hasPasswordError : true , okEmail : false } 

       })
       loading(false)
      return
    }
    if(!emailValidation(formData.email)){
      toast.error('Enter valid Email!',{
        position: "bottom-center",
        theme: "colored"
      })
      setHasError((prevState) =>{
        return {...prevState , hasEmailError : true  , okEmail : false } 

       })
      loading(false)
      return

    }
    setTimeout(() => {
      login(formData);
      loading(false)
    } , 2000)
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
  const onBlurHandler :React.FocusEventHandler<HTMLInputElement>  = (event) =>{
    const id = event.target.id;
    const value = event.target.value;
    if(id === "email"){
       
      if(!emailValidation(value)){
        setHasError((prevState) =>{
         return {...prevState , hasEmailError : true } 

        })
      }else if(emailValidation(value)){
        setHasError((prevState) =>{
          return {...prevState , hasEmailError : false , okEmail : true } 
         })
      }
    
    }if(id === "password"){
      if(value === ""){
      setHasError((prevState) =>{
        return {...prevState , hasPasswordError : true } 
       })
      }else{
        setHasError((prevState) =>{
          return {...prevState , hasPasswordError : false , okPassword : true } 
         })
      }
    }
  }
  return (
    <section className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-darkBlue to-accentBlue transition-all duration-1000">

    <div className="flex items-center justify-start w-2/3 h-1/2 rounded-md shadow-md  login-form transition-all duration-1000">

      {isLoading && <Spinner/> }
      {!isLoading && <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start w-1/2  space-y-5  border-slate-300 transition-all duration-1000"
        >
        <h3 className=" text-darkBlue text-4xl font-sans">
          Wellcome to MainBrain
        </h3>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className={`${hasError.hasEmailError ? "input-error" : ""} ${hasError.okEmail ? "input-success" : ""} "text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md transition-all duration-1000"`}
          onChange={onChange}
          onBlur={onBlurHandler}
          />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className={`${hasError.hasPasswordError ? "input-error" : ""} ${hasError.okPassword ? "input-success" : ""} text-lg p-3 px-6 rounded-md border-none outline-none focus:shadow-md transition-all duration-1000"`}
          onChange={onChange}
          onBlur={onBlurHandler}
          />

        <button className="bg-accentBlue text-white text-lg rounded-md p-2 px-12 hover:opacity-80 hover:cursor-pointer hover:shadow-md transition-all duration-1000">
          Login
        </button>
      </form>
}
    </div>
          </section>
  );
}

export default LoginForm;
