import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import UserContext, { userContextType } from "../context/userContext";

import Input from "./common/Input";
import SlideButton from "./common/SlideButton";
import { FiLock, FiMail } from "react-icons/fi";

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email adress."),
  password: z
    .string()
    .min(6, "Password must be atleast 6 characters.")
    .max(52, "Password must be less than 52 characters."),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const LoginForm: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const { login } = useContext(UserContext) as userContextType;

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    console.log(values);
    login(values)
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-darkBlue to-accentBlue transition-all duration-1000">
      <div className="flex items-center justify-start w-2/3 rounded-md shadow-md  login-form transition-all duration-1000">
        <form
          method="post"
          className="m-8 w-2/5 text-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            name="email"
            label="Email address"
            type="text"
            icon={<FiMail />}
            placeholder="example@emaple.com"
            register={register}
            error={errors?.email?.message}
            disabled={isSubmitting}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            icon={<FiLock />}
            placeholder="***********"
            register={register}
            error={errors?.password?.message}
            disabled={isSubmitting}
          />
          <div className="mt-2 hover:underline w-fit">
            <a href="/forgot" className=" text-blue-600">
              Forgot password ?
            </a>
          </div>
          <SlideButton
            type="submit"
            text="Sign in"
            slide_text="Secure sign in"
            icon={<FiLock />}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
