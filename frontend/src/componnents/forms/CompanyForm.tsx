import React from "react";
import Button from "../common/Button";

const CompanyForm = () => {
  return (
    <div>
      <form className="w-full max-w-3xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-first-name">
              First Name
            </label>
            <input
              className="form-input    mb-3  "
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="grid-last-name">
              Last Name
            </label>
            <input
              className="form-input"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-first-name">
              Official Company Name
            </label>
            <input
              className="form-input mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Google"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="grid-last-name">
              official Logo
            </label>
            <input
              className="form-input"
              id="grid-last-name"
              type="file"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="form-label" htmlFor="grid-password">
              Company Address
            </label>
            <input
              className="form-input mb-3"
              id="grid-password"
              type="password"
              placeholder="Iran , Tehran , Vanak Square , ..."
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-first-name">
              Email Address
            </label>
            <input
              className="form-input  mb-3  "
              id="grid-first-name"
              type="email"
              placeholder="mycompany@gmail.com"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="grid-last-name">
              Phone number
            </label>
            <input
              className="form-input \"
              id="grid-last-name"
              type="tel"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-city">
              Registration Number
            </label>
            <input
              className="form-input      "
              id="grid-city"
              type="number"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-city">
              Zip Code
            </label>
            <input
              className="form-input      "
              id="grid-city"
              type="number"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-zip">
              Registration Date
            </label>
            <input
              className="form-input      "
              id="grid-zip"
              type="date"
              placeholder="90210"
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
