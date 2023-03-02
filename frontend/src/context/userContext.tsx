import { createContext, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

type formDataType = {
  email: string;
  password: string;
};
export type userContextType = {
  isLogin: boolean;
  isLoading : boolean;
  login: (formData: formDataType) => void;
  confirmLogin : () => void;
  loading: (status : boolean) => void;
};

const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const[isLoading , setIsLoading] = useState(false);

  // Loading
  const loading = (status : boolean) => {
    setIsLoading(status);
}


// login
  const login = (formData: formDataType) => {
    axios
      .post("http://localhost:5000/api/users/login", formData)
      .then((response) => {
        console.log(response)
        if (!response.status) {
          toast.error(`This is an HTTP error: The status is ${response.status}` ,{
            position: "bottom-center",
            theme: "colored"
          })
          return
          }
        const data = response.data;
        const convertedData = JSON.stringify(data);
        setIsLogin(true);
        // show successful logim message
        toast.success(`wellcome ${data.name}` , {
          position: "bottom-center",
          theme: "colored"
        })
        //set JWT token to local
        localStorage.setItem("user", convertedData);

        //set token to axios common header
        //  setAuthToken(token);
      })
      .catch((err) => {
        console.log(err)
        toast.error(err,{
          position: "bottom-center",
          theme: "colored"
        })
      
      });

      
  };

  const confirmLogin = () => {
    setIsLogin(true);
  };

  return (
    <UserContext.Provider value={{ isLogin, isLoading , loading , login, confirmLogin  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
