import React from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-b-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}
    >
      <div className={"flex items-center  px-5 lg:px-7.5 xl:px-10 max-lg:py-4"}>
        <a className={"block w-[12rem] xl:mr-8 "} href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>
        <nav
          className={
            "fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto  lg:bg-transparent"
          }
        >
          <ul className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={` block relative font-code text-2xl  uppercase text-n-1/50 transition-colors hover:text-color-1  ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {item.title}
              </a>
            ))}
          </ul>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8  text-n-1/50  transition-colors hover:text-n-1 lg:block"
        >
          New Accout
        </a>
        <Button className="hidden lg:flex " href="#login">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
