"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Olivia Bennett",
    role: "Head Cake Artist",
    image: "/assests/member1.jpg",
  },
  { name: "Liam Martinez", role: "Pastry Chef", image: "/assests/member2.jpg" },
  {
    name: "Sophia Thompson",
    role: "Cake Designer",
    image: "/assests/member3.jpg",
  },
  {
    name: "Noah Patel",
    role: "Operations Manager",
    image: "/assests/member4.jpg",
  },
  {
    name: "Emma Rodríguez",
    role: "Client Experience Lead",
    image: "/assests/member5.jpg",
  },
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Team section fade in
      gsap.fromTo(
        teamRef.current,
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
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Team member cards animation
      gsap.fromTo(
        ".team-member",
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".team-member",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, teamRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredMember === index) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredMember(index);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div ref={teamRef} className="mt-8 relative">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="team-member w-full border-t border-b border-border py-3 cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={(e) => handleMouseMove(e, index)}
        >
          {/* Circle overlay positioned next to name */}
          {hoveredMember === index && (
            <div
              className="absolute z-50 pointer-events-none transition-all duration-300 ease-out animate-in zoom-in-0 fade-in-0 left-[200px] md:left-[300px] lg:left-[400px]"
              style={{
                top: "50%",
                transform: `translate(${mousePosition.x}px, calc(-50% + ${mousePosition.y}px))`,
                transformOrigin: "top right",
              }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl transform transition-transform duration-200 hover:scale-105">
                <Image
                  src={teamMembers[hoveredMember].image}
                  alt={teamMembers[hoveredMember].name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </div>
            </div>
          )}

          <Wrapper className="flex flex-row items-center justify-between relative">
            <div className="flex items-center md:gap-6 gap-3 text-xl">
              <h1 className="text-text/40 transition-colors duration-300 md:text-3xl group-hover:text-primary">
                0{index + 1}
              </h1>
              <h1 className="text-text font-semibold transition-colors md:text-3xl duration-300 hover:text-primary">
                {member.name}
              </h1>
            </div>
            <h3 className="text-text/70 font-bold text-xs transition-colors duration-300 hover:text-primary">
              {member.role}
            </h3>
          </Wrapper>
        </div>
      ))}
    </div>
  );
};

export default Team;
