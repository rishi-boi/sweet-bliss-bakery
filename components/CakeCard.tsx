"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const CakeCard = ({ name, img }: { name: string; img: string }) => {
  // Ensure the image path starts with a forward slash for Next.js
  const imagePath = img.startsWith("/") ? img : `/${img}`;
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const nameEl = nameRef.current;

    if (!card || !image || !overlay || !nameEl) return;

    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(nameEl, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(nameEl, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Set initial state
    gsap.set(nameEl, { y: 20, opacity: 0 });
    gsap.set(overlay, { opacity: 0 });

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 cursor-pointer w-48 h-auto bg-white rounded-lg shadow-md overflow-hidden relative"
    >
      <div ref={imageRef} className="relative overflow-hidden">
        <Image
          src={imagePath}
          alt={name}
          width={192}
          height={128}
          className="w-full h-32 object-cover"
          unoptimized={true}
        />

        {/* Primary color overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-primary/70" />

        {/* Cake name overlay */}
        <div
          ref={nameRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h3 className="text-white font-bold text-lg text-center drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
