// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setIsScrolled(offset > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
//       isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
//             Ingenium Designs
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-8">
//             <NavLink href="#home" isScrolled={isScrolled}>
//               Home
//             </NavLink>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 className={`flex items-center space-x-1 ${
//                   isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'
//                 }`}
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <span>Our Services</span>
//                 <ChevronDown className="h-4 w-4" />
//               </button>

//               {/* Dropdown Menu */}
//               {isServicesOpen && (
//                 <div
//                   className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg"
//                   onMouseEnter={() => setIsServicesOpen(true)}
//                   onMouseLeave={() => setIsServicesOpen(false)}
//                 >
//                   <DropdownItem href="#service1">Interior Design</DropdownItem>
//                   <DropdownItem href="#service2">Space Planning</DropdownItem>
//                   <DropdownItem href="#service3">3D Visualization</DropdownItem>
//                   <DropdownItem href="#service4">Furniture Selection</DropdownItem>
//                 </div>
//               )}
//             </div>

//             <NavLink href="#gallery" isScrolled={isScrolled}>
//               Gallery
//             </NavLink>
            
//             <NavLink href="#about" isScrolled={isScrolled}>
//               About Us
//             </NavLink>
            
//             <NavLink href="#contact" isScrolled={isScrolled}>
//               Contact Us
//             </NavLink>
            
//             <NavLink href="#members" isScrolled={isScrolled}>
//               Members
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // NavLink Component
// const NavLink = ({ href, children, isScrolled }) => (
//   <a
//     href={href}
//     className={`transition-colors duration-200 ${
//       isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'
//     }`}
//   >
//     {children}
//   </a>
// );

// // Dropdown Item Component
// const DropdownItem = ({ href, children }) => (
//   <a
//     href={href}
//     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//   >
//     {children}
//   </a>
// );

// export default Navbar;