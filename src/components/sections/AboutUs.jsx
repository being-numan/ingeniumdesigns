import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(imageRef.current,
      { 
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }
    ).fromTo(contentRef.current.children,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.5"
    );
  }, []);

  return (
    <section className="bg-black py-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative" ref={imageRef}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img
                src="/src/assets/design13.png"
                alt="About Ingenium Designs"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -left-2 w-24 h-24 border-l-2 border-b-2 border-[#e6a573]/30 rounded-bl-3xl" />
              <div className="absolute -top-2 -right-2 w-24 h-24 border-t-2 border-r-2 border-[#e6a573]/30 rounded-tr-3xl" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" ref={contentRef}>
            {/* Section Label */}
            <div className="space-y-2">
              <p className="text-[#e6a573] uppercase tracking-wider text-sm">Our Story</p>
              <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
                About Us
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-medium">Ingenium Designs</span>{" "}
                is a design firm dedicated to creating beautiful and functional
                spaces that are tailored to the needs of our clients.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experienced professionals specializes in both
                interior and landscape designs, and draws inspiration from the
                natural environment to create unique and inviting spaces.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our goal is to bring the beauty of nature into our designs,
                while providing a comfortable and safe environment for our
                clients. We strive to create spaces that are both aesthetically
                pleasing and practical.
              </p>
            </div>

            {/* CTA Button */}
            {/* <button className="group inline-flex items-center gap-2 bg-[#3C3D37] hover:bg-[#4a4b44] text-white px-8 py-4 rounded-full transition-all duration-300 mt-6">
              <span className="text-sm tracking-wider">Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;