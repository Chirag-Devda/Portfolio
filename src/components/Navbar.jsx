import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github } from "../assets";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            Chirag &nbsp;<span className="hidden sm:block">Devda</span>
          </p>
        </Link>

        <div className="flex items-center gap-10">
          <a
            className="hidden md:flex"
            href="https://github.com/Chirag-Devda"
            target="_blank"
          >
            <button className="right-4 flex items-center justify-start rounded-full border bg-[#6633ee] py-[4px] pl-2 pr-[15px]">
              <div>
                <img
                  className="invert"
                  width={40}
                  src={github}
                  alt="Github-Logo"
                />
              </div>
              <span className="text-brown-500 mx-2 text-[19px] font-semibold">
                Github
              </span>
            </button>
          </a>
          <ul className="hidden list-none flex-row gap-10 md:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  Active === link.title ? "text-white" : "text-secondary"
                } cursor-pointer text-[18px] font-medium hover:text-white`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* menu bar */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <div className="flex items-center gap-10">
            <a href="https://github.com/Chirag-Devda" target="_blank">
              <button className="right-4 flex items-center justify-start rounded-full border bg-[#6633ee] py-[2px] pl-1 pr-[10px]">
                <div>
                  <img
                    className="invert"
                    width={30}
                    src={github}
                    alt="Github-Logo"
                  />
                </div>
                <span className="text-brown-500 mx-2 text-[16px] font-semibold">
                  Github
                </span>
              </button>
            </a>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] cursor-pointer object-contain"
              onClick={() => {
                settoggle(!toggle);
              }}
            />
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  } font-poppins cursor-pointer text-[16px] font-medium`}
                  onClick={() => {
                    settoggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
