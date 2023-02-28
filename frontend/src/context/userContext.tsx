import { createContext, useState } from "react";
import axios from "axios";

type formDataType = {
  email: string;
  password: string;
};
export type userContextType = {
  isLogin: boolean;
  login: (formData: formDataType) => void;
};

const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const login = (formData: formDataType) => {
    axios
      .post("http://localhost:5000/api/users/login", formData)
      .then((response) => {
        const data = response.data;
        const convertedData = JSON.stringify(data);
        setIsLogin(true);

        //set JWT token to local
        localStorage.setItem("user", convertedData);

        //set token to axios common header
        //  setAuthToken(token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ isLogin, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
