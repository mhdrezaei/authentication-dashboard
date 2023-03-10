import React, { Fragment, useState, useContext } from "react";
import { toast } from "react-toastify";
import CompanyContext, { companyContextType } from "../../context/companyContext";



import Button from "../common/Button";
const CompanyForm = () => {
  const { isLoading , loading , addNewCompany } = useContext(CompanyContext) as companyContextType
  
  let dataImg = new FormData();
  const [image, setImage] = useState<FormData>(dataImg);
  const [preview, setPreview] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    family : "",
    title: "",
    address: "",
    email: "",
    phone: "",
    zip: "",
    city:"",
    image : "",
    registration : ""
  });


  let data = new FormData();
  const {name , family, title, email, address, phone, zip, city, registration } =
    formData;



  const imgFilehandler: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    const target = event.target as HTMLInputElement;
    if(target.files){
      dataImg.append("file", target.files[0] as Blob);
      setPreview(URL.createObjectURL(target.files[0]));
      setImage(dataImg);
    }
    ;
  };

  const jobSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loading(false);

    if (
      name === "" ||
      name.trim() === "" ||
      family === "" ||
      family.trim() === "" ||
      title === "" ||
      title.trim() === "" ||
      email === "" ||
      address === "" ||
      address.trim() === "" ||
      phone === "" ||
      zip === "" ||
      city === "" ||
      registration === ""
    ) {
      toast.error("All field are necessary!!!");
      loading(true);
      return;
    }
    

     addNewCompany(formData , image);
    
    loading(true);
    
  };


  const onChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };


  return (
    <div>
      <form onSubmit={jobSubmit} className="w-full max-w-3xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="name">
              First Name
            </label>
            <input
              className="form-input mb-3"
              id="name"
              name="name"
              type="text"
              placeholder="Jane"
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="family">
              Last Name
            </label>
            <input
              className="form-input"
              id="family"
              name="family"
              type="text"
              placeholder="Doe"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="title">
              Official Company Name
            </label>
            <input
              className="form-input mb-3"
              id="title"
              name="title"
              type="text"
              placeholder="Google"
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="selectedFile">
              official Logo
            </label>
            <input
              className="form-input"
              id="selectedFile"
              name="selectedFile"
              type="file"
              onChange={imgFilehandler}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="form-label" htmlFor="address">
              Company Address
            </label>
            <input
              className="form-input mb-3"
              id="address"
              name="address"
              type="text"
              placeholder="Iran , Tehran , Vanak Square , ..."
              onChange={onChange}
            />
        
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input  mb-3  "
              id="email"
              name="email"
              type="email"
              placeholder="mycompany@gmail.com"
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="phone">
              Phone number
            </label>
            <input
              className="form-input \"
              id="phone"
              name="phone"
              type="tel"
              placeholder="0211111111"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="registration">
              Registration Number
            </label>
            <input
              className="form-input      "
              id="registration"
              name="registration"
              type="number"
              placeholder="123456789"
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="zip">
              Zip Code
            </label>
            <input
              className="form-input      "
              id="zip"
              name="zip"
              type="number"
              placeholder="Tehran"
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="city">
               City
            </label>
            <input
              className="form-input      "
              id="city"
              name="city"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="w-full text-center">
          <Button label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
