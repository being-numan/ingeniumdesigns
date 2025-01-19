import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownCircle, Sparkles, Star, Move3d } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const layersRef = useRef(null);
  const titleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    layer2: false,
    layer3: false
  });
  const [imageErrors, setImageErrors] = useState({
    layer2: false,
    layer3: false
  });

  const allImagesLoaded = Object.values(imagesLoaded).every(Boolean);
  const hasErrors = Object.values(imageErrors).some(Boolean);

  useLayoutEffect(() => {
    if (!allImagesLoaded) return;

    const layers = layersRef.current;
    const title = titleRef.current;
    const images = document.querySelectorAll('.hero-image');
    
    const tl = gsap.timeline();

    tl.from(title, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out"
    })
    .from(images, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2
    }, "-=1")
    .from(['.hero-subtitle', '.hero-button', '.hero-stats', '.scroll-indicator'], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1
    }, "-=0.5");

    if (images.length > 0) {
      gsap.to(images[0], {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: layers,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(images[1], {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: layers,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [allImagesLoaded]);

  const handleImageLoad = (layer) => {
    setImagesLoaded(prev => ({
      ...prev,
      [layer]: true
    }));
  };

  const handleImageError = (layer) => {
    setImageErrors(prev => ({
      ...prev,
      [layer]: true
    }));
    setImagesLoaded(prev => ({
      ...prev,
      [layer]: true
    }));
  };

  const fallbackBackground = `
    bg-gradient-to-b 
    from-gray-900 
    via-purple-900 
    to-violet-950
  `;

  return (
    <div ref={parallaxRef} className="relative w-full overflow-hidden">
      <section className="relative flex min-h-screen items-center justify-center px-8">
        {/* Loading State */}
        {!allImagesLoaded && !hasErrors && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}

        {/* Base Layer with Images and Overlay */}
        <div ref={layersRef} className={`absolute inset-0 overflow-hidden ${hasErrors ? fallbackBackground : ''}`}>
          {/* Base atmospheric gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-purple-800/20 to-fuchsia-900/30 mix-blend-soft-light"></div>
          
          {/* Dynamic light rays */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent transform -rotate-12 mix-blend-overlay"></div>
            <div className="absolute top-0 right-1/3 w-1/3 h-full bg-gradient-to-b from-purple-500/10 via-transparent to-transparent transform rotate-12 mix-blend-overlay"></div>
          </div>

          {/* Base tone adjustment */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Layer 2 - Background mountains */}
          {!imageErrors.layer2 && (
            <img
              src="src/assets/layer-2.png"
              alt="Mountains"
              className="hero-image absolute -top-[17.5%] left-0 h-[89%] w-full object-cover pointer-events-none z-10"
              onLoad={() => handleImageLoad('layer2')}
              onError={() => handleImageError('layer2')}
            />
          )}
          
          {/* Multi-layer gradient system */}
          <div className="absolute inset-0 z-25">
            {/* Atmospheric depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-500/5 to-fuchsia-500/5 mix-blend-overlay"></div>
            
            {/* Color enhancement */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-purple-900/10 mix-blend-soft-light"></div>
            
            {/* Depth perception */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>

          {/* Layer 1 - Foreground elements */}
          {!imageErrors.layer3 && (
            <img
              src="src/assets/layer-3.png"
              alt="Foreground"
              className="hero-image absolute -top-[9%] left-0 h-[117.5%] w-full object-cover pointer-events-none z-40"
              onLoad={() => handleImageLoad('layer3')}
              onError={() => handleImageError('layer3')}
            />
          )}

          {/* Top vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-41"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-50">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 
              ref={titleRef}
              className="text-[8vw] font-bold text-white leading-none tracking-tight drop-shadow-2xl text-center [text-wrap:balance]"
            >
              Transform Your Space
            </h1>
            
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-fuchsia-500/5 blur-3xl rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`}></div>
            <Sparkles className={`absolute -right-12 -top-8 w-8 h-8 text-yellow-300 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <Star className="absolute -left-12 bottom-0 w-6 h-6 text-purple-300 animate-spin opacity-50" />
          </div>

          <p className="hero-subtitle mt-8 text-2xl text-white font-light tracking-wide max-w-2xl mx-auto text-center drop-shadow-lg">
            Where imagination meets reality
          </p>
        </div>

        {/* Enhanced bottom gradient system */}
        <div className="absolute bottom-0 left-0 w-full z-45">
          {/* Multi-layer bottom gradient */}
          <div className="absolute bottom-0 left-0 h-[40%] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent mix-blend-overlay"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats absolute bottom-12 right-12 flex gap-8 text-white z-50">
          <div className="text-center">
            <div className="text-2xl font-bold drop-shadow-lg">500+</div>
            <div className="text-sm opacity-70">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold drop-shadow-lg">98%</div>
            <div className="text-sm opacity-70">Happy Clients</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute left-8 bottom-24 transform -rotate-90 origin-left z-50">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-white/50"></div>
            <p className="text-white/70 tracking-widest text-sm uppercase">Scroll to explore</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;