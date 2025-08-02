"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Create a dummy icon component that renders nothing
const EmptyIcon = () => <div className="hidden" />;

const cakeFeatures = [
  {
    Icon: EmptyIcon,
    name: "Wedding Elegance",
    description: "Perfect for your special wedding day celebration",
    event: "Weddings",
    href: "/",
    cta: "Order Now",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/assests/cake1.jpg"
          alt="Wedding cake"
          fill
          className="object-cover opacity-80"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: EmptyIcon,
    name: "Birthday Bliss",
    description: "Make your birthday unforgettable with our special cakes",
    event: "Birthdays",
    href: "/",
    cta: "Order Now",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/assests/cake2.jpg"
          alt="Birthday cake"
          fill
          className="object-cover opacity-80"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: EmptyIcon,
    name: "Anniversary Joy",
    description: "Celebrate your love milestones with sweetness",
    event: "Anniversaries",
    href: "/",
    cta: "Order Now",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/assests/cake3.jpg"
          alt="Anniversary cake"
          fill
          className="object-cover opacity-80"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: EmptyIcon,
    name: "Corporate Events",
    description: "Professional celebrations deserve professional cakes",
    event: "Corporate",
    href: "/",
    cta: "Order Now",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/assests/cake4.jpg"
          alt="Corporate cake"
          fill
          className="object-cover opacity-80"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

export function Grid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main container fade in
      gsap.fromTo(
        gridRef.current,
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
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Bento grid items animation
      gsap.fromTo(
        ".bento-item",
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.6,
            grid: "auto",
            from: "start",
          },
          scrollTrigger: {
            trigger: ".bento-item",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Mobile masonry items
      gsap.fromTo(
        ".masonry-item",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".masonry-item",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="w-full h-[100vh] relative overflow-hidden">
      {/* Bento Grid for Desktop and Tablet */}
      <div className="hidden md:block h-full overflow-hidden">
        <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3 md:grid-rows-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto [&>*]:min-h-[20rem] lg:[&>*]:min-h-[24rem]">
          {cakeFeatures.map((feature) => (
            <div
              key={feature.name}
              className={`bento-item group relative flex flex-col justify-between overflow-hidden rounded-xl bg-background transform-gpu transition-all duration-300 hover:scale-[1.02] ${feature.className}`}
            >
              {/* Background */}
              <div className="absolute inset-0">{feature.background}</div>

              {/* Content with better text styling */}
              <div className="relative z-10 p-6 mt-auto">
                <div className="flex flex-col gap-3">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-primary px-3 py-1 rounded-full text-white">
                      {feature.event}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {feature.name}
                  </h3>
                  <p className="text-white/90 drop-shadow-md max-w-lg">
                    {feature.description}
                  </p>
                  <button className="mt-2 self-start text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/30 transition-colors">
                    {feature.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </BentoGrid>
      </div>

      {/* Masonry Grid for Mobile */}
      <div className="block md:hidden h-full overflow-hidden">
        <div className="columns-1 gap-4 space-y-4 px-4">
          {cakeFeatures.map((feature, index) => (
            <div
              key={feature.name}
              className={`masonry-item break-inside-avoid mb-4 ${
                index % 3 === 0 ? "h-64" : index % 3 === 1 ? "h-48" : "h-56"
              }`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                {/* Background Image */}
                <Image
                  src={`/assests/cake${index + 1}.jpg`}
                  alt={`${feature.name} cake`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-primary px-2 py-1 rounded-full">
                      {feature.event}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{feature.name}</h3>
                  <p className="text-sm opacity-90 mb-3">
                    {feature.description}
                  </p>
                  <button className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
                    {feature.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-center pb-6 z-20">
        <button className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <span>Show More</span>
        </button>
      </div>
    </div>
  );
}
