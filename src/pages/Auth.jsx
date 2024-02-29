import { GiDonerKebab } from "react-icons/gi";
import { RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-lg lg:w-[30%] md:w-[55%] w-[85%] px-10 space-y-5 py-5 flex flex-col justify-center items-center">
        <div className=" flex items-center gap-x-2">
          <GiDonerKebab className="bg-red-600 w-10 h-10 rounded-full text-white" />
          <h3 className="font-mono text-4xl text-red-600 font-semibold drop-shadow-md font-[Kode Mono]">
            YouTube Doner
          </h3>
        </div>
        <div className="flex items-center w-full justify-center gap-3 my-2 flex-wrap">
          <ButtonLogo icon={<RiGithubFill size={25} />} text="Github" />
          <ButtonLogo icon={<FcGoogle size={25} />} text="Google" />
        </div>
        <hr className="border-slate-300 my-3 dark:border-slate-700 w-full mx-auto" />
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </div>
    </section>
  );
};

export default Auth;

export const ButtonLogo = ({ icon, text }) => {
  return (
    <button className="lg:w-[45%] w-full hover:bg-gray-100 transition-all duration-300 py-2 flex items-center justify-center gap-x-2 rounded-lg shadow border dark:border-none">
      {icon}
      {text}
    </button>
  );
};
