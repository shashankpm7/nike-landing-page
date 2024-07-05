import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons/";
import { navLinks } from "../constants";

export const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="max-container flex justify-between">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="max-sm:w-24"
          />
        </a>
        <ul
          id="links"
          className="flex-1 flex lg:flex-row max-lg:hidden lg:static lg:gap-16 justify-center flex-col absolute left-0 max-lg:w-full max-lg:bg-pink-200 top-[70px] gap-8 max-lg:p-4"
        >
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="text-slate-gray font-montserrat leading-normal text-lg"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:ml-auto">
          <button className="max-sm:px-3 max-sm:py-1 px-4 py-2 mr-4 max-sm:mr-2 rounded-2xl bg-pink-200">
            Sign-in
          </button>
          <button className=" max-sm:px-3 max-sm:py-1 px-4 py-2 mr-4  max-sm:mr-2 rounded-2xl bg-pink-200">
            Log-in
          </button>
        </div>
        <img
          src={hamburger}
          alt=".."
          className="lg:hidden w-8 cursor-pointer max-sm:w-4"
        />
      </nav>  
    </header>
  );
};
