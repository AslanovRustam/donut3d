"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/utils/useIsMobile";
import blueBerry from "../../assets/blueBerry.png";
import apple from "../../assets/apple.png";
import caramel from "../../assets/caramel.png";
import leaf1 from "../../assets/leaf.png";
import leaf2 from "../../assets/leaf2.png";

export default function DonutSectionSlider() {
  const { isMobile, hydrated } = useIsMobile();

  const [step, setStep] = useState(1);

  const blueBerryTextRef = useRef(null);
  const appleTextRef = useRef(null);
  const caramelTextRef = useRef(null);

  const blueBerryDonutRef = useRef(null);
  const appleDonutRef = useRef(null);
  const caramelDonutRef = useRef(null);

  const greenCircleRef = useRef(null);
  const caramelCircleRef = useRef(null);

  const blueToApple = useRef<GSAPTimeline | null>(null);
  const appleToCaramel = useRef<GSAPTimeline | null>(null);

  const handleNextClick = () => {
    if (step === 1) {
      blueToApple.current?.play();
      setStep(2);
    } else if (step === 2) {
      appleToCaramel.current?.play();
      setStep(3);
    }
  };

  const handlePrevClick = () => {
    if (step === 3) {
      appleToCaramel.current?.reverse();
      setStep(2);
    } else if (step === 2) {
      blueToApple.current?.reverse();
      setStep(1);
    }
  };

  useLayoutEffect(() => {
    if (!hydrated) return;

    const topText = isMobile ? "100vh" : "200%";
    const donutScale = isMobile ? 2.2 : 1;
    const donutCaramelScale = isMobile ? 1.5 : 0.4;
    const donutBlueBerryPosition = isMobile ? "-53vh" : "-70%";
    const donutApplePosition = isMobile ? "-53vh" : "-60%";
    const secondTextPosition = isMobile ? "20%" : "26%";
    const donutAppleScale = isMobile ? 1.5 : 0.5;

    blueToApple.current = gsap
      .timeline({ paused: true })
      .to(blueBerryTextRef.current, { y: topText }, "a")
      .to(
        blueBerryDonutRef.current,
        { y: donutBlueBerryPosition, rotate: 180, scale: 0.6 },
        "a"
      )
      .to(
        appleDonutRef.current,
        { top: "50%", rotate: "180deg", scale: donutScale },
        "a"
      )
      .to(greenCircleRef.current, { duration: 0.8, scale: 20 }, "a")
      .to(appleTextRef.current, { top: secondTextPosition, scale: 1 }, "a")
      .to(".leaf1", { rotate: "180deg" }, "a")
      .to(".leaf2", { rotate: "180deg" }, "a")
      .to(".leaf3", { rotate: "27deg" }, "a")
      .to(".leaf4", { rotate: "0deg" }, "a")
      .to(
        caramelDonutRef.current,
        { top: "104%", scale: donutCaramelScale },
        "a"
      );

    appleToCaramel.current = gsap
      .timeline({ paused: true })
      .to(
        appleDonutRef.current,
        { y: donutApplePosition, rotate: 180, scale: donutAppleScale },
        "b"
      )
      .to(
        caramelDonutRef.current,
        { top: "50%", rotate: "360deg", scale: donutScale },
        "b"
      )
      .to(appleTextRef.current, { y: topText }, "b")
      .to(caramelCircleRef.current, { scale: 20, duration: 0.8 }, "b")
      .to(caramelTextRef.current, { top: secondTextPosition, scale: 1 }, "b")
      .to(".leaf1", { rotate: "360deg" }, "b")
      .to(".leaf2", { rotate: "360deg" }, "b")
      .to(".leaf3", { rotate: "180deg" }, "b")
      .to(".leaf4", { rotate: "360deg" }, "b")
      .to(
        blueBerryDonutRef.current,
        { y: "-200%", rotate: 180, scale: 0 },
        "b"
      );
  }, [hydrated, isMobile]);

  if (!hydrated) return null; //  avoid hydration mismatch

  return (
    <div className="h-screen bg-radial from-[#E0B8FF] to-[#744EB2] flex  justify-center items-center overflow-hidden">
      <div className="w-full h-full relative">
        {/* //green circle container */}
        <div
          ref={greenCircleRef}
          className="absolute -top-24 size-40 rounded-full bg-radial from-[#E0FFB8] to-[#7AB24E] left-1/2  -translate-x-1/2 scale-0"
        />
        {/* //aramel circle container */}
        <div
          ref={caramelCircleRef}
          className="absolute -top-24 size-40 rounded-full bg-radial from-[#FFE3B8] to-[#D68042] left-1/2  -translate-x-1/2 scale-0"
        />

        <h1
          ref={blueBerryTextRef}
          className="text-[15vw] w-full text-center uppercase font-anton absolute md:top-1/2 top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          Blue Berry
        </h1>
        <h2
          ref={appleTextRef}
          className="text-[15vw] w-full text-center uppercase font-anton absolute left-1/2  -translate-x-1/2 scale-0 -top-[50%]"
        >
          green apple
        </h2>
        <h2
          ref={caramelTextRef}
          className="text-[15vw] w-full text-center uppercase font-anton absolute left-1/2  -translate-x-1/2 scale-0 -top-[50%]"
        >
          caramel
        </h2>
        {/* //donut images */}
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
        <Image
          ref={caramelDonutRef}
          src={caramel}
          alt="caramel"
          width={800}
          height={800}
          className="absolute top-[120%] left-1/2 -translate-y-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] rotate-[180deg]"
        />
        {/* //leaf images */}
        <Image
          src={leaf1}
          alt="leaf"
          width={128}
          height={224}
          // className="absolute top-[5%] left-[15%] leaf1"
          className={`absolute top-[5%]  leaf1 ${
            isMobile ? "scale-200 " : "scale-100 left-[15%]"
          }`}
        />
        <Image
          src={leaf2}
          alt="leaf2"
          width={128}
          height={224}
          // className="absolute top-[5%] right-[15%] leaf2"
          className={`absolute top-[5%]  leaf2 ${
            isMobile ? "scale-200 right-[10%]" : "scale-100 right-[15%]"
          }`}
        />
        <Image
          src={leaf2}
          alt="leaf2"
          width={128}
          height={224}
          // className="absolute bottom-[5%] left-[15%] rotate-[177deg] leaf3"
          className={`absolute bottom-[5%]  rotate-[177deg] leaf3 ${
            isMobile ? "scale-200" : "scale-100 left-[15%]"
          }`}
        />
        <Image
          src={leaf1}
          alt="leaf"
          width={128}
          height={224}
          // className="absolute bottom-[5%] right-[15%] rotate-[180deg] leaf4"
          className={`absolute bottom-[5%]  rotate-[180deg] leaf4 ${
            isMobile ? "scale-200 right-[4%]" : "scale-100 right-[15%]"
          }`}
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
