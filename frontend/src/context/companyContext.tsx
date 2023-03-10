import { createContext, useState } from "react";
import { toast } from "react-toastify";
export type companyType = {
  name :string , family:string, title:string, email:string, image : string , address:string, phone:string, zip:string, city:string, registration:string  
}
export type companyDataType = {
  img: FormData;
  newCompany: companyType;
};

export type companyContextType = {
  isLoading: boolean;
  addNewCompany: (newCompany: companyType, img :FormData) => void;
  loading: (status: boolean) => void;
};

const CompanyContext = createContext<companyContextType | null>(null);

export const CompanyProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Loading
  const loading = (status: boolean) => {
    setIsLoading(status);
  };

  // add new company
  const addNewCompany = (newCompany: companyType, img: FormData) => {
    console.log(img)
    let imgUrl;
    const res = fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: img,
    })
    .then((res) => res.json())
    .then((res) => {
      // setImageUrl(JSON.stringify(`${res.img}`));
      imgUrl = res.img;
      
      if (imgUrl) {
        newCompany.image = imgUrl;
        console.log(newCompany)
        }
        const addJob = fetch("http://localhost:5000/api/company/new", {
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
    <CompanyContext.Provider value={{ isLoading, loading, addNewCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
