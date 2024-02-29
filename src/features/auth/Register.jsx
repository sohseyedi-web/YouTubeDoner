import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLogin }) => {

  const submitHandler = (e) => {
    e.preventDefault()
  };
  return (
    <form className="space-y-7 w-full" onSubmit={submitHandler}>
      <input type="text" />
      <button className="btn bg-red-600 text-white w-full text-lg font-semibold h-[40px] hover:bg-red-800 transition-all">
         ثبت نام 
      </button>
      <div className="flex items-center justify-center gap-x-1 my-2">
        <span>حساب کاربری داری?</span>
        <span
          className="font-bold cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          ورود  
        </span>
      </div>
    </form>
  );
};

export default Register;
