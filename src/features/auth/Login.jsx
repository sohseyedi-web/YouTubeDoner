import React from "react";

const Login = ({ setIsLogin }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="space-y-7 w-full" onSubmit={submitHandler}>
      <input type="text" />
      
      <div className="flex justify-end w-full text-lg  cursor-pointer font-semibold">
        فراموشی رمز?
      </div>
      <button className="btn bg-red-600 text-white w-full text-lg font-semibold h-[40px] hover:bg-red-800 transition-all">
        ورود به حساب
      </button>
      <div className="flex items-center justify-center gap-x-1 my-2" dir="rtl">
        <span>حساب کاربری ندارم?</span>
        <span
          className="font-bold cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          ثبت نام
        </span>
      </div>
    </form>
  );
};

export default Login;
