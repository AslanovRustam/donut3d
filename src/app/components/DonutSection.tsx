"use client";
import Image from "next/image";
import blueBerry from "../../../public/blueberry.png";
import apple from "../../../public/apple.png";
import leaf1 from "../../../public/leaf.png";
import leaf2 from "../../../public/leaf2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";

export default function DonutSection() {
  const blueBerryTextRef = useRef(null);
  const blueBerryDonutRef = useRef(null);
  const appleDonutRef = useRef(null);
  const handleNextClick = () => {
    let tl = gsap.timeline();
    tl.to(
      blueBerryTextRef.current,
      {
        y: "200%",
        duration: 0.5,
      },
      "a"
    );
    tl.to(
      blueBerryDonutRef.current,
      {
        y: "-70%",
        duration: 0.5,
        rotate: 180,
        scale: 0.6,
      },
      "a"
    );
    tl.to(
      appleDonutRef.current,
      {
        top: "50%",
        rotate: "180deg",
        // duration: 0.5,
        // rotate: 180,
        scale: 1,
      },
      "a"
    );
    console.log("Next button clicked");
  };
  const handlePrevClick = () => {
    // Handle next button click here
    console.log("Prev button clicked");
  };
  return (
    <div className="h-screen bg-radial from-[#E0B8FF] to-[#744EB2] flex  justify-center items-center overflow-hidden">
      <div className="w-full h-full relative">
        <h1
          ref={blueBerryTextRef}
          className="text-[15vw] w-full text-center uppercase font-anton absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          Blue Berry
        </h1>
        <Image
          ref={blueBerryDonutRef}
          src={blueBerry}
          alt="blueBerry"
          width={600}
          height={600}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />
        <Image
          ref={appleDonutRef}
          src={apple}
          alt="apple"
          width={800}
          height={800}
          className="absolute top-[104%] left-1/2 -translate-y-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] "
        />
        {/* //leaf images */}
        <Image
          src={leaf1}
          alt="leaf"
          width={128}
          height={224}
          className="absolute top-[5%] left-[15%]"
        />
        <Image
          src={leaf2}
          alt="leaf2"
          width={128}
          height={224}
          className="absolute top-[5%] right-[15%]"
        />
        <Image
          src={leaf2}
          alt="leaf2"
          width={128}
          height={224}
          className="absolute bottom-[5%] left-[15%] rotate-[177deg]"
        />
        <Image
          src={leaf1}
          alt="leaf"
          width={128}
          height={224}
          className="absolute bottom-[5%] right-[15%] rotate-[125deg]"
        />
        {/* //swipe animation */}
        <div className="absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full flex justify-between px-4">
          <ChevronLeft
            className="size-12 cursor-pointer"
            onClick={handlePrevClick}
          />
          <ChevronRight
            className="size-12 cursor-pointer"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
}
