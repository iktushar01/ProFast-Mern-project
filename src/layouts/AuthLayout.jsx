import React from "react";
import { Outlet } from "react-router";
import ProfastLogo from "../Pages/Shared/ProfastLogo/ProfastLogo";

const AuthLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <ProfastLogo />
      </div>

      <div className="bg-cover flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full px-4 py-8 gap-8">
          <img
            src="https://i.postimg.cc/9fH1mcFN/auth-Image.png"
            className="w-full max-w-md lg:max-w-lg object-cover"
            alt="Authentication"
          />
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
