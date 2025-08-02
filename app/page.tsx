"use client";
import BakeryFooter from "@/components/BakeryFooter";
import CakeCard from "@/components/CakeCard";
import { Grid } from "@/components/Grid";
import { Marquee } from "@/components/magicui/marquee";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import Team from "@/components/Team";
import Wrapper from "@/components/Wrapper";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cakes = [
  {
    name: "Chocolate Cake",
    img: "/assests/cake1.jpg",
  },
  {
    name: "Vanilla Cake",
    img: "/assests/cake2.jpg",
  },
  {
    name: "Strawberry Cake",
    img: "/assests/cake3.jpg",
  },
  {
    name: "Red Velvet Cake",
    img: "/assests/cake4.jpg",
  },
];

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cakesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animate hero elements
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Scroll-triggered animations for cakes section
      gsap.fromTo(
        cakesRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cakesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Individual cake card animations
      gsap.fromTo(
        ".cake-card",
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".cake-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <StructuredData />
      <main ref={heroRef} className="w-full">
        <section>
          {/* Video Background */}
          <div className="absolute top-0 right-0 inset-0 w-full h-full overflow-hidden rounded-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full min-h-4/5 object-cover opacity-30"
            >
              <source src="/assests/cakeVideo.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              Your browser does not support the video tag.
            </video>
            {/* Fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/5"></div>
          </div>
          <Wrapper>
            <Navbar />
            <div className="flex w-full relative md:min-h-[50vh] min-h-[40vh]">
              {/* Content */}
              <div className="relative z-10 my-18 w-full flex flex-col items-center justify-center space-y-8 md:items-start md:w-1/2">
                <div className="w-full text-center md:text-left space-y-4">
                  <h1
                    ref={titleRef}
                    className="text-text font-bold text-4xl text-nowrap"
                  >
                    Hand-Crafter Cakes,
                  </h1>
                  <h2 ref={subtitleRef} className="text-text text-xl ">
                    For Your Sweetest Moments, and for your loved ones
                  </h2>
                </div>
                <div className="flex space-x-4">
                  <button
                    ref={buttonRef}
                    className="bg-primary hover:bg-primary/80 transition-all text-background p-2 rounded-xl cursor-pointer"
                  >
                    Order Your Cake
                  </button>
                  <button className="border border-primary text-primary p-2 rounded-xl cursor-pointer hover:bg-primary hover:text-background transition-all">
                    Custom Cake
                  </button>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
        <section ref={cakesRef}>
          <Marquee pauseOnHover={true}>
            {cakes.map((cake, index) => (
              <div key={index} className="cake-card">
                <CakeCard name={cake.name} img={cake.img} />
              </div>
            ))}
          </Marquee>
        </section>
        <section className="my-16">
          <Wrapper>
            <h1 className="text-text font-bold text-4xl text-nowrap">
              Our Creations
            </h1>
            <div className="mt-8">
              <Grid />
            </div>
          </Wrapper>
        </section>
        <section>
          <Wrapper>
            <h1 className="text-text font-bold text-4xl text-nowrap">
              Our Team
            </h1>
          </Wrapper>
          <div>
            <Team />
          </div>
        </section>
        <section>
          <BakeryFooter />
        </section>
      </main>
    </>
  );
};

export default Page;
