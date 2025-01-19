import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);
  const stats = [
    { value: 50, label: 'Business Projects' },
    { value: 12, label: 'Partners' },
    { value: 60, label: 'Happy Customers' }
  ];

  useEffect(() => {
    stats.forEach((stat, index) => {
      let startValue = 0;
      const incrementValue = () => {
        startValue++;
        if (startValue <= stat.value) {
          if (numbersRef.current[index]) {
            numbersRef.current[index].textContent = `${startValue}+`;
          }
          requestAnimationFrame(incrementValue);
        }
      };

      ScrollTrigger.create({
        trigger: numbersRef.current[index],
        start: 'top center+=100',
        onEnter: () => {
          startValue = 0;
          requestAnimationFrame(incrementValue);
        },
        once: true
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-black py-20" 
      style={{ marginTop: '-2px' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="src/assets/design1.jpg"
                alt="Modern interior design"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#e6a573] uppercase text-sm tracking-wider font-light">
                The key difference between ordinary and special
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light leading-tight">
                No matter the season, our spaces are as nuanced as the lifestyles they reflect,{" "}
                <span className="text-gray-400 font-light">don't just dream it.</span>
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="space-y-2">
                  <p 
                    ref={el => numbersRef.current[index] = el}
                    className="text-[#e6a573] text-4xl md:text-5xl font-light"
                  >
                    0+
                  </p>
                  <p className="text-gray-400 text-sm font-light">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* About Us Button */}
            {/* <button className="group flex items-center space-x-2 bg-transparent hover:bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full transition-all duration-300">
              <span className="text-sm tracking-wider">About us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;