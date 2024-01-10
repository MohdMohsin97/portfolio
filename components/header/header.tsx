"use client"


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ModeToggle } from "../ui/mode-toggle";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { Socials } from "./socials";
import { ElementRef, useEffect, useRef } from "react";

export const Header = () => {

  gsap.registerPlugin(ScrollTrigger);
  
  let headerRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const showHead = gsap
      .fromTo(
        headerRef.current,
        {
          top: 0,
          duration: 0.5,
          
        },
        {
          top: "-60px",
        }
      )
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === 1 ? showHead.play() : showHead.reverse();
      },
    });
  });

  return (
    <div ref={headerRef} className="border-b-2 grid grid-cols-3 sticky top-0 z-50 ">
      <Navbar />
      <Logo />
      <div className="relative flex justify-center items-center">
      <Socials />
      <ModeToggle />
      </div>
    </div>
  );
};
