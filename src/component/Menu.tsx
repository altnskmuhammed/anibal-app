import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState("text-red-500");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLang = () => {
    i18n.language === "en" ? changeLanguage("tr") : changeLanguage("en");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "text-red-500" ? "text-white" : "text-red-500"
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-5 justify-center items-center">
      <div className="md:flex hidden gap-5 justify-center items-center">
        <p
          onClick={() => handleLang()}
          className="border p-2 bg-blend-lighten text-white hover:bg-blend-darken hover:cursor-pointer"
        >
          {i18n.language === "en" ? "Eng" : "Tr"}
        </p>
        <p className="font-bold text-[12px] text-white flex justify-center uppercase items-center gap-1">
          {t("news")} <AiOutlineDown className="font-bold" />
        </p>
        <p className="font-bold text-[12px] text-white flex justify-center uppercase items-center gap-1">
          {t("features")} <AiOutlineDown className="font-bold" />
        </p>
        <p className="font-bold text-[12px] text-white flex justify-center uppercase items-center gap-1">
          {t("topics")} <AiOutlineDown className="font-bold" />
        </p>
        <p className="font-bold text-[12px] text-white flex justify-center uppercase items-center gap-1">
          {t("video")} <AiOutlineDown className="font-bold" />
        </p>
        <p className="font-bold text-[12px] text-white flex justify-center uppercase items-center gap-1">
          <LuDot
            className={`${color} duration-500`}
            style={{ transform: "scale(2.5)" }}
          />{" "}
          {t("live")}
        </p>
      </div>
      <div className="md:bg-[#0089CC] bg-transparent h-full w-[3rem] flex uppercase justify-center items-center">
        <AiOutlineSearch
          className="text-white font-bold h-full "
          style={{ transform: "scale(1.5)" }}
        />
      </div>
      <div className="md:hidden block">
        <GiHamburgerMenu
          className="text-white font-bold h-full "
          style={{ transform: "scale(1.5)" }}
        />
      </div>
    </div>
  );
};

export default Menu;
