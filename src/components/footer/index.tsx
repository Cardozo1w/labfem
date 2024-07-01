import React, { FC } from "react";
import { Link } from "gatsby";
import { NavigationProps } from "../../types/types";

const Footer: FC<NavigationProps> = ({ sliceContext }) => {
  const navigation = sliceContext.navigation;

  return (
    <footer className="bg-[#af277d] text-white py-4 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>
            &copy; {new Date().getFullYear()} Labfem. Todos los derechos
            reservados.
          </p>
          <p>
            Algunos de los recursos en este sitio fueron obtenidos de{" "}
            <a className="text-[#fab800]" href="https://www.freepik.es/" target="_blank">
              FreePik
            </a>
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {navigation.map((item) => (
              <li>
                <Link to={item.to} className="text-white hover:text-[#fab800]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
