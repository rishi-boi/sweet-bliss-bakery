"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  {
    name: "about",
    url: "/about",
  },
  {
    name: "services",
    url: "/services",
  },
  {
    name: "works",
    url: "/works",
  },
  {
    name: "contact us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="">
          {/* <button
            className="flex relative justify-center items-center cursor-pointer gap-2 z-20 md:text-background md:bg-primary p-2 rounded-xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="hidden md:block text-xl">MENU</span>{" "}
            {!isOpen ? (
              <Menu className="text-text md:text-background" size={22} />
            ) : (
              <X className="text-text md:text-background" size={22} />
            )}
          </button> */}
          <Button
            className="flex items-center justify-center gap-2 font-bold relative z-20 text-lg p-2 border border-shadow bg-primary text-background rounded-xl"
            setIsOpen={setIsOpen}
          >
            <span className="hidden md:block">{isOpen ? "CLOSE" : "MENU"}</span>
            {!isOpen ? <Menu size={22} /> : <X size={22} />}
          </Button>
        </div>
      </nav>
      <div
        className={`bg-primary rounded-xl text-background absolute top-[-10px] right-[-10px] md:max-w-3xl z-10 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "-translate-y-0 md:translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-y-full md:translate-x-0 opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <p className="p-4 text-sm w-4/6 m-8 md:text-xl">
            We create beautiful, handcrafted cakes that turn your precious
            moments into unforgettable memories: right from small parties to
            your weddding
          </p>
        </div>
        <div>
          {links.map((link, index) => (
            <div
              key={index}
              className={`border-t md:hover:bg-text transition-all duration-300 cursor-pointer border-text text-center overflow-hidden max-h-25 md:hover:max-h-60 md:p-8 p-4 ${
                index == links.length - 1 && "rounded-b-xl"
              }`}
            >
              <span className="font-playfair md:text-8xl uppercase font-extrabold text-5xl relative">
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
