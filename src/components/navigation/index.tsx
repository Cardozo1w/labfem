import React, { FC } from "react";
import { Link } from "gatsby";
import logo from "../../assets/img/logo.png";
import { NavigationProps } from "../../types/types";

const Navigation: FC<NavigationProps> = ({ sliceContext }) => {
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
        <nav>
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
      </div>
    </header>
  );
};

export default Navigation;
