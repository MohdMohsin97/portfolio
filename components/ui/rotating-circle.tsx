"use client";

import { ElementRef, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ReactCurvedText from "react-curved-text";
import { BlackCircle } from "./black-circle";

export const RotatingCircle = () => {
  const boxRef = useRef<ElementRef<"div">>(null);
  const circleRef = useRef<ElementRef<"div">>(null);

  useLayoutEffect(() => {
    // use gsap context for easy cleanup!
    let ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        duration: 10,
        repeat: -1,
        rotation: 360,
        ease: "none",
      });
      gsap.to(circleRef.current, {
        duration: 2,
        x: 280,
      });
    });
  }, []);

  return (
    <div
      ref={circleRef}
      className=" absolute bottom-4 -left-60 rounded-full text-sm"
    >
      <div className="relative">
        <BlackCircle />
        <div ref={boxRef}>
        <ReactCurvedText
          width={200}
          height={200}
          cx={100}
          cy={100}
          rx={75}
          ry={75}
          reversed={false}
          text=". Front-End Developer . Back-End Developer"
          textProps={{ style: {  
            fontSize: 24 } }}
          textPathProps={{fill: "gray"}}
        />
        </div>
      </div>
    </div>
  );
};
