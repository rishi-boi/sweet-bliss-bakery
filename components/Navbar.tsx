"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { gsap } from "gsap";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const linksContainer = linksRef.current;

    if (!menu || !linksContainer) return;

    const links = linksContainer.querySelectorAll(".nav-link");
    const logo = menu.querySelector(".background-logo");

    if (isOpen) {
      // Open animation
      gsap.fromTo(
        menu,
        {
          opacity: 0,
          y: -20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );

      // Background logo animation
      if (logo) {
        gsap.fromTo(
          logo,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -5,
          },
          {
            opacity: 0.12,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      // Stagger animation for links
      gsap.fromTo(
        links,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    } else {
      // Close animation
      gsap.to(menu, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="flex justify-between items-center relative z-20">
        <Logo />
        <div className="">
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
        ref={menuRef}
        className={`bg-primary rounded-xl text-background absolute top-[-10px] right-[-10px] md:max-w-3xl z-[18] overflow-hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: isOpen ? 1 : 0 }}
      >
        {/* Background Logo */}
        <div className="background-logo absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="text-background/30 font-serif text-6xl md:text-8xl lg:text-9xl font-bold select-none text-center leading-tight">
            <div>Sweet</div>
            <div className="text-4xl md:text-6xl lg:text-7xl opacity-70">
              Bliss
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10">
          <p className="p-4 text-sm w-4/6 m-8 md:text-xl">
            We create beautiful, handcrafted cakes that turn your precious
            moments into unforgettable memories: right from small parties to
            your weddding
          </p>
        </div>
        <div ref={linksRef} className="relative z-10">
          {links.map((link, index) => (
            <div
              key={index}
              className={`nav-link border-t md:hover:bg-text transition-all duration-300 cursor-pointer border-text text-center overflow-hidden max-h-25 md:hover:max-h-60 md:p-8 p-4 ${
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
