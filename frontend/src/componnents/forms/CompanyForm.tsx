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
    loading(true);

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
      loading(false);
      return;
    }
    
    setTimeout(()=>{
      addNewCompany(formData , image);
      loading(false);
      setFormData({
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
      })
    }, 2000)

    
    
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
      <form onSubmit={jobSubmit} className="w-full min-w-fit">
        <div className="flex justify-between" >
        <div className="flex  flex-col justify-start" >
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
              value={name}
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
              value={family}
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
              value={title}
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
        <div className="flex flex-col justify-start w-96 lg:hidden " >
          <div className="mt-4 mb-8 p-4 w-96 h-96 border border-dashed border-accentBlueDark text-center text-accentBlueDark" >
            {preview ? <img src={preview} className="w-full h-full" /> : <span className="flex flex-col justify-center items-center w-full h-full">Company Logo</span>}
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
              value={address}
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
              value={email}
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
              value={phone}
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
              value={registration}
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
              placeholder="1234567890"
              onChange={onChange}
              value={zip}
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
              placeholder="Tehran"
              onChange={onChange}
              value={city}
            />
          </div>
        </div>
        <div className="w-full text-center">
          <Button label={isLoading ? "Loading..." : "Submit"} />
        </div>
        </div>
        <div className="hidden lg:flex flex-col justify-start items-center w-96 " >
          <div className="mt-8 p-4  lg:w-52 lg:h-52 xl:w-64 xl:h-64 border border-dashed border-accentBlueDark text-center text-accentBlueDark" >
            {preview ? <img src={preview} className="w-full h-full" /> : <span className="flex flex-col justify-center items-center w-full h-full">Company Logo</span>}
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
