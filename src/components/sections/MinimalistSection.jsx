import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Settings, Shield, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseCard = ({ number, title, description, Icon }) => {
  const cardRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(cardRef.current,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          ease: "power2.out" 
        }
      );
    }
  }, [inView]);

  // Mouse tracking effect
  useEffect(() => {
    const card = cardRef.current;
    const shineLayer = card.querySelector('.shine-effect');
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      // Update card rotation
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Update shine effect position
      const shineMoveX = (x / rect.width) * 100;
      const shineMoveY = (y / rect.height) * 100;
      shineLayer.style.background = `radial-gradient(circle at ${shineMoveX}% ${shineMoveY}%, rgba(230, 165, 115, 0.15) 0%, rgba(60, 61, 55, 0) 50%)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      shineLayer.style.background = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref}>
      <div 
        ref={cardRef} 
        className="group relative bg-[#3C3D37] rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl cursor-pointer"
        style={{ transition: 'transform 0.2s ease-out' }}
      >
        {/* Shine Effect Layer */}
        <div className="shine-effect absolute inset-0 rounded-2xl pointer-events-none" />
        
        {/* Content Container */}
        <div className="relative z-10">
          {/* Number Badge */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#e6a573]/20">
            <span className="text-[#e6a573] text-sm font-medium">0{number}</span>
          </div>

          {/* Icon Container */}
          <div className="relative w-14 h-14 mb-8">
            <div className="absolute inset-0 bg-[#e6a573]/10 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#e6a573] transform transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-xl font-light mb-4 group-hover:text-[#e6a573] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

         
        </div>
      </div>
    </div>
  );
};

const MinimalistSection = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center+=100",
      }
    });

    tl.fromTo(headerRef.current.children,
      { 
        y: 30, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl text-white font-light">
            Our Expertise
          </h2>
          <p className="text-2xl text-[#e6a573] font-light">
            Experience the Difference with Ingenium designs
          </p>
          <p className="text-gray-400">
            Let our team of experts turn your outdoor space into a captivating oasis that 
            enhances your property's value and brings you joy for years to come. 
            <span className="text-white font-medium hover:text-[#e6a573] cursor-pointer transition-colors duration-300">
              {" "}Contact us today for a consultation{" "}
            </span>
            and let's embark on a journey to transform your landscape into a work of art.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ExpertiseCard
            number={1}
            title="Experienced and Professional"
            description="Our team consists of highly skilled and trained professionals with years of experience in the landscaping industry. We are committed to delivering exceptional results and exceeding customer expectations on every project."
            Icon={Award}
          />
          <ExpertiseCard
            number={2}
            title="Customized Approach"
            description="We understand that each property is unique, and every client has different preferences and needs. That's why we take a personalized approach to design and tailor our services to match your specific requirements and budget."
            Icon={Settings}
          />
          <ExpertiseCard
            number={3}
            title="Quality and Reliability"
            description="We prioritize the use of high-quality materials, plants, and equipment to ensure long-lasting and visually stunning landscapes. We take pride in our attention to detail and commitment to delivering projects on time and within budget."
            Icon={Shield}
          />
          <ExpertiseCard
            number={4}
            title="Customer Satisfaction"
            description="Your satisfaction is our top priority. We value open communication, listen to your ideas, and strive to create landscapes that bring your vision to life. We are dedicated to providing exceptional customer service and building long-term relationships."
            Icon={Heart}
          />
        </div>
      </div>
    </section>
  );
};

export default MinimalistSection;