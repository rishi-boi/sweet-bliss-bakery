"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BakeryFooter = () => {
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate footer content on scroll
      gsap.fromTo(
        contentRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger animation for footer sections
      gsap.fromTo(
        ".footer-section",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add subscribe animation
    gsap.to(".subscribe-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer ref={footerRef} className="bg-primary">
      <div ref={contentRef} className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sweet Bliss Bakery Section */}
          <div className="footer-section space-y-3">
            <h2 className="text-2xl font-serif text-background mb-2">
              Sweet Bliss Bakery&apos;s
            </h2>
            <p className="text-sm italic mb-4 text-background">
              &ldquo;Crafted with love, baked to delight.&rdquo;
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📍</span>
                <span className="text-foreground">Pune, MH</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📞</span>
                <span className="text-foreground">+9209077225</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">✉️</span>
                <span className="text-foreground">
                  rishipardeshi567@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-background mb-4 ">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Our Creations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  FAQ&apos;s
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-background mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2 text-sm">
              <p>Mon-Sat: 9am to 8pm</p>
              <p>Sunday Closed</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-background mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">Get sweet deals in your inbox...</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:primary focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="subscribe-btn bg-text hover:bg-text/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          © 2025 Sweet Bliss Bakery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default BakeryFooter;
