import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const ImageModal = ({ image, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline();
    
    tl.fromTo(modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.inOut' }
    ).fromTo(content,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.1'
    );

    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      tl.kill();
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleClose = () => {
    const modal = modalRef.current;
    const content = contentRef.current;

    gsap.timeline()
      .to(content, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
      .to(modal, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: onClose
      }, '-=0.1');
  };

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
      onClick={handleClose}
    >
      {/* Close Button - Now outside the modal content */}
      <button 
        onClick={handleClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
      >
        <X className="w-6 h-6" />
      </button>

      <div 
        ref={contentRef}
        className="w-[60%] max-h-[80vh] bg-neutral-900 rounded-2xl overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          {/* Image Container */}
          <div className="flex-1 min-h-0">
            <img
              src={image.image}
              alt={image.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title Container */}
          <div className="h-[80px] min-h-[80px] border-t border-white/10 flex items-center px-8 bg-neutral-900">
            <h3 className="text-white text-2xl font-light">{image.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;