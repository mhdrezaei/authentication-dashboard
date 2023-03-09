import { createContext, useState } from "react";
import { toast } from "react-toastify";

export type companyDataType = {
  image: string;
  newCompany: {};
};

export type companyContextType = {
  isLogin: boolean;
  isLoading: boolean;
  addCompany: (newCompany: {}, image: string) => void;
  loading: (status: boolean) => void;
};

const CompanyContext = createContext<companyContextType | null>(null);

export const UserProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Loading
  const loading = (status: boolean) => {
    setIsLoading(status);
  };

  // add new job
  const addCompany = (newCompany: {}, image: string) => {
    // console.log(newJob)
    let imgUrl;
    const res = fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: image,
    })
      .then((res) => res.json())
      .then((res) => {
        // setImageUrl(JSON.stringify(`${res.img}`));
        imgUrl = res.img;

        if (imgUrl) {
          newCompany.image = imgUrl;
        }
        const addJob = fetch("http://localhost:5000/api/v1/job/new", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCompany),
        })
          .then((res) => {
            if (!res.status) {
              toast.error(`This is an HTTP error: The status is ${res.status}`);
              return;
            }
            return res.json();
          })
          .then((actualData) => {
            actualData.success
              ? toast.success(actualData.message)
              : toast.error(actualData.message);
          })
          .catch((err) => {
            console.log(err.message);
            toast.error(err);
          });
      });
  };

  return (
    <CompanyContext.Provider value={{ isLoading, loading, addCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
