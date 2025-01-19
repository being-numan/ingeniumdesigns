import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from "../../assets/logo.png";

gsap.registerPlugin(CustomEase);

const menuItems = [
  {
    title: 'Home',
    number: '01',
    link: 'home'
  },
  {
    title: 'About Us',
    number: '02',
    link: 'about'
  },
  {
    title: 'Our Services',
    number: '03',
    link: 'services'
  },
  {
    title: 'Our Expertise',
    number: '04',
    link: 'expertise'
  },
  {
    title: 'Our Projects',
    number: '05',
    link: 'projects'
  },
  {
    title: 'Contact Us',
    number: '06',
    link: 'contact'
  }
];

const CustomMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
    tlRef.current = gsap.timeline({ paused: true });

    const nav = navRef.current;
    const menu = menuRef.current;
    const overlay = overlayRef.current;
    const menuButtonTexts = document.querySelectorAll(".menu-button-text p");
    const menuButtonIcon = document.querySelector(".menu-button-icon");
    const bgPanels = nav.querySelectorAll(".bg-panel");
    const menuLinks = nav.querySelectorAll(".menu-link");
    const fadeTargets = nav.querySelectorAll("[data-menu-fade]");

    gsap.set(nav, { display: "none" });

    tlRef.current
      .set(nav, { display: "block" })
      .set(menu, { xPercent: 0 })
      .fromTo(
        menuButtonTexts,
        { yPercent: 0 },
        { yPercent: -100, stagger: 0.2, duration: 0.7, ease: "main" }
      )
      .fromTo(
        menuButtonIcon,
        { rotate: 0 },
        { rotate: 315, duration: 0.7, ease: "main" },
        "<"
      )
      .fromTo(
        overlay,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.7, ease: "main" },
        "<"
      )
      .fromTo(
        bgPanels,
        { xPercent: 101 },
        { xPercent: 0, stagger: 0.12, duration: 0.575, ease: "main" },
        "<"
      )
      .fromTo(
        menuLinks,
        { yPercent: 140, rotate: 10 },
        { yPercent: 0, rotate: 0, stagger: 0.05, duration: 0.7, ease: "main" },
        "<+=0.35"
      )
      .fromTo(
        fadeTargets,
        { autoAlpha: 0, yPercent: 50 },
        {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 0.04,
          duration: 0.7,
          ease: "main",
        },
        "<+=0.2"
      );

    return () => {
      tlRef.current.kill();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleToggle();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="osmo-ui">
        <header className="header">
          <div className="container is--full">
            <nav className="nav-row">
              <a href="/" className="nav-logo-row">
                <div className="bg-white rounded-lg p-2 w-20 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={logo}
                    alt="Ingenium Designs Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <div className="nav-row__right">
                <button onClick={handleToggle} className="menu-button">
                  <div className="menu-button-text">
                    <p className="p-large">Menu</p>
                    <p className="p-large">Close</p>
                  </div>
                  <div className="icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="menu-button-icon"
                    >
                      <path
                        d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <div ref={navRef} className="nav">
        <div ref={overlayRef} onClick={handleToggle} className="overlay" />
        <nav ref={menuRef} className="menu">
          <div className="menu-bg">
            <div className="bg-panel first" />
            <div className="bg-panel second" />
            <div className="bg-panel" />
          </div>
          <div className="menu-inner">
            <ul className="menu-list">
              {menuItems.map((item) => (
                <li key={item.number} className="menu-list-item">
                  <Link 
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={handleToggle}
                    className="menu-link group cursor-pointer"
                  >
                    <p className="menu-link-heading flex items-center gap-4 text-[3.5em]">
                      {item.title}
                      <ArrowUpRight className="w-8 h-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </p>
                    <p className="eyebrow text-[#e6a573]">{item.number}</p>
                    <div className="menu-link-bg bg-[#3C3D37]" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="menu-details">
              <p data-menu-fade className="p-small text-[#e6a573]">
                Connect With Us
              </p>
              <div className="socials-row">
                <a 
                  data-menu-fade 
                  href="#" 
                  className="p-large text-link group flex items-center gap-2"
                >
                  Instagram
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  data-menu-fade 
                  href="#" 
                  className="p-large text-link group flex items-center gap-2"
                >
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  data-menu-fade 
                  href="#" 
                  className="p-large text-link group flex items-center gap-2"
                >
                  Twitter
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CustomMenu;