import React from "react";
import IconResolver from "../iconResolver";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-8 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#af277d] mb-8">Contactanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center">
            <IconResolver
              token="phone"
              className="h-12 w-12 text-[#af277d] mb-4"
            />
            <h3 className="text-2xl font-bold text-[#af277d] mb-2">WhatsApp</h3>
            <p className="text-[#666666]">Próximamente</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconResolver
              token="mail"
              className="h-12 w-12 text-[#af277d] mb-4"
            />
            <h3 className="text-2xl font-bold text-[#af277d] mb-2">Email</h3>
            <p className="text-[#666666]">
              <a
                href="mailto:labfemis@gmail.com
"
              >
                labfemis@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconResolver
              token="instagram"
              className="h-12 w-12 text-[#af277d] mb-4"
            />
            <h3 className="text-2xl font-bold text-[#af277d] mb-2">
              Instagram
            </h3>
            <p className="text-[#666666]">
              <a
                href="https://www.instagram.com/labfem_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @labfem_
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
