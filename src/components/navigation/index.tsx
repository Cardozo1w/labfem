import React, { FC, useState } from "react";
import { Link } from "gatsby";
import logo from "../../assets/img/logo.png";
import { NavigationProps } from "../../types/types";
import HamburguerButton from "../hamburguerButton";
import "./styles.css";

const Navigation: FC<NavigationProps> = ({ sliceContext }) => {
  const [active, setActive] = useState(false);

  const navigation = sliceContext.navigation;
  return (
    <header className="bg-white py-4 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1>
          <Link
            to="/"
            className="text-3xl font-bold text-[#af277d] flex items-center"
          >
            <div className="max-h-12 max-w-12">
              <img
                alt="logo labfem"
                className="mr-2 object-contain"
                src={logo}
              />
            </div>
            Labfem
          </Link>
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            {navigation.map((item) => (
              <li>
                <Link
                  to={item.to}
                  className="text-[#af277d] hover:text-[#fab800]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="block lg:hidden" onClick={() => setActive(!active)}>
          <HamburguerButton active={active} />
        </button>
        <div className={`slide-in-div block lg:hidden ${active ? "visible" : ""}`}>
          <div className="slide-in-content py-16 px-8">
            <nav>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li>
                    <button
                      className="text-[#af277d] hover:text-[#fab800]"
                      onClick={()=>{
                        window.location.hash = item.to
                        setActive(false)
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>{" "}
      </div>
    </header>
  );
};

export default Navigation;
