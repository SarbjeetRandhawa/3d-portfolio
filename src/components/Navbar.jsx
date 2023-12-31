import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "../components/";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [Toogle, setToogle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18] font-bold cursor-pointer">
            Sarbjeet <span>| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Links) => (
            <li
              key={Links.id}
              className={`${active === Links.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18] font-medium cursor-pointer`}
              onClick={() => setActive(Links.title)}
            >
              <a href={`#${Links.id}`}>{Links.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={Toogle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToogle(!Toogle)}
          />
          <div
            className={`${!Toogle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl z-10`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Links) => (
                <li
                  key={Links.id} jjf
                  className={`${active === Links.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]
              hover:text-white`}
                  onClick={() => {
                    setToogle(!Toogle)
                    // setactive(Links.title);
                  }}
                >
                  <a href={`#${Links.id}`}>{Links.title}</a>
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
