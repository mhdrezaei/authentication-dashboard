import React from "react";

type buttonProps = {
  label: string;
};

const Button = (props: buttonProps) => {
  return (
    <button className="bg-gray-600 text-gray-100 hover:bg-slate-700 mx-auto mt-5 px-6 py-3 font-semibold rounded shadow-sm  dark:bg-accentBlueDark dark:text-darkBlue1 dark:hover:bg-accentBlue hover:shadow-md ">
      {props.label}
    </button>
  );
};

export default Button;
