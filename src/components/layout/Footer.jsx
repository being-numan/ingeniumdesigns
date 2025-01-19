import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import design10 from "../../assets/design10.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-4 max-w-lg">
              <h2 className="text-4xl font-light leading-tight">
                Engage with Us in Conversation.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                In a global world based on communication, a brand must look
                beyond its borders, open up to new experiences, and dare to be
                different. Meeting the brightest minds of one's time is the most
                effective way to nurture creativity
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-xl overflow-hidden">
              <img
                src={design10}
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          {/* Social Media Links */}
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[#e6a573] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#e6a573] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#e6a573] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Created By */}
          {/* <p className="text-gray-400 text-sm mb-6 md:mb-0">
            Created by{" "}
            <a
              href="#"
              className="text-white hover:text-[#e6a573] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Numan
            </a>
          </p> */}

          {/* Company Logo */}
          <div>
            <h2 className="text-2xl font-light">
              Ingenium <span className="font-medium">Designs.</span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
