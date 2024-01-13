import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="">
      <div className="w-full bg-[#005D99] h-[48px] flex md:px-20 px-5 justify-between  ">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <Menu />
      </div>
      <p className="text-[20px] text-[#005D99] text-start font-bold mt-5 md:ml-20 ml-5">
        OPINION
      </p>
    </div>
  );
};

export default Header;
