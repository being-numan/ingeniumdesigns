import React, { useState } from 'react';

export const ViewMoreButton = ({ children, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`transition-transform duration-300 ${
        isHovered ? 'translate-x-1' : ''
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};