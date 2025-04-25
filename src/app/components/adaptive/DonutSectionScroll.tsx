"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useIsMobile } from "@/utils/useIsMobile";
import blueBerry from "../../assets/blueBerry.png";
import apple from "../../assets/apple.png";
import caramel from "../../assets/caramel.png";
import leaf1 from "../../assets/leaf.png";
import leaf2 from "../../assets/leaf2.png";

gsap.registerPlugin(ScrollTrigger);

export default function DonutSectionScroll() {
  const { isMobile, hydrated } = useIsMobile();

  const sectionRef = useRef(null);
  const blueBerryTextRef = useRef(null);
  const appleTextRef = useRef(null);
  const caramelTextRef = useRef(null);

  const blueBerryDonutRef = useRef(null);
  const appleDonutRef = useRef(null);
  const caramelDonutRef = useRef(null);

  const greenCircleRef = useRef(null);
  const caramelCircleRef = useRef(null);

  useLayoutEffect(() => {
    if (!hydrated || !sectionRef.current) return;

    const topText = isMobile ? "100vh" : "200%";
    const donutScale = isMobile ? 2.2 : 1;
    const donutCaramelScale = isMobile ? 1.5 : 0.4;
    const donutBlueBerryPosition = isMobile ? "-53vh" : "-70%";
    const donutApplePosition = isMobile ? "-53vh" : "-60%";
    const secondTextPosition = isMobile ? "20%" : "26%";
    const donutAppleScale = isMobile ? 1.5 : 0.5;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000", // length of the "virtual" scroll inside the section
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          pin: true, // pin the section while scrolling
        },
      });

      tl
        // 1. Blue Berry → Apple
        .to(blueBerryTextRef.current, { y: topText }, "stage1")
        .to(
          blueBerryDonutRef.current,
          { y: donutBlueBerryPosition, rotate: 180, scale: 0.6 },
          "stage1"
        )
        .to(
          appleDonutRef.current,
          { top: "50%", rotate: 180, scale: donutScale },
          "stage1"
        )
        .to(greenCircleRef.current, { scale: 20, duration: 0.8 }, "stage1")
        .to(
          appleTextRef.current,
          { top: secondTextPosition, scale: 1 },
          "stage1"
        )
        .to(
          caramelDonutRef.current,
          { top: "104%", scale: donutCaramelScale },
          "stage1"
        )
        .to(".leaf1", { rotate: 180 }, "stage1")
        .to(".leaf2", { rotate: 180 }, "stage1")
        .to(".leaf3", { rotate: 27 }, "stage1")
        .to(".leaf4", { rotate: 0 }, "stage1")

        // 2. Apple → Caramel
        .to(
          appleDonutRef.current,
          { y: donutApplePosition, rotate: 360, scale: donutAppleScale },
          "stage2"
        )
        .to(
          caramelDonutRef.current,
          { top: "50%", rotate: 360, scale: donutScale },
          "stage2"
        )
        .to(appleTextRef.current, { y: topText }, "stage2")
        .to(caramelCircleRef.current, { scale: 20 }, "stage2")
        .to(
          caramelTextRef.current,
          { top: secondTextPosition, scale: 1 },
          "stage2"
        )
        .to(".leaf1", { rotate: 360 }, "stage2")
        .to(".leaf2", { rotate: 360 }, "stage2")
        .to(".leaf3", { rotate: 180 }, "stage2")
        .to(".leaf4", { rotate: 360 }, "stage2")
        .to(blueBerryDonutRef.current, { y: "-100%", scale: 0 }, "stage2");
    });

    return () => ctx.revert();
  }, [hydrated]);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-radial from-[#E0B8FF] to-[#744EB2] flex justify-center items-center overflow-hidden relative"
    >
      <div
        ref={greenCircleRef}
        className="absolute -top-24 size-40 rounded-full bg-radial from-[#E0FFB8] to-[#7AB24E] left-1/2 -translate-x-1/2 scale-0"
      />
      <div
        ref={caramelCircleRef}
        className="absolute -top-24 size-40 rounded-full bg-radial from-[#FFE3B8] to-[#D68042] left-1/2 -translate-x-1/2 scale-0"
      />

      <h1
        ref={blueBerryTextRef}
        className="text-[15vw] w-full text-center uppercase font-anton absolute md:top-1/2 top-1/4  left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        Blue Berry
      </h1>
      <h2
        ref={appleTextRef}
        className="text-[15vw] w-full text-center uppercase font-anton absolute left-1/2 -translate-x-1/2 scale-0 -top-[50%]"
      >
        Green Apple
      </h2>
      <h2
        ref={caramelTextRef}
        className="text-[15vw] w-full text-center uppercase font-anton absolute left-1/2 -translate-x-1/2 scale-0 -top-[50%]"
      >
        Caramel
      </h2>

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
        className="absolute top-[104%] left-1/2 -translate-y-1/2 -translate-x-1/2 size-[45vw] scale-[0.4]"
      />
      <Image
        ref={caramelDonutRef}
        src={caramel}
        alt="caramel"
        width={800}
        height={800}
        className="absolute top-[120%] left-1/2 -translate-y-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] rotate-[180deg]"
      />

      <Image
        src={leaf1}
        alt="leaf"
        width={128}
        height={224}
        className={`absolute top-[5%]  leaf1 ${
          isMobile ? "scale-200 left-0" : "scale-100 left-[15%]"
        }`}
      />
      <Image
        src={leaf2}
        alt="leaf2"
        width={128}
        height={224}
        className={`absolute top-[5%]  leaf2 ${
          isMobile ? "scale-200 right-[10%]" : "scale-100 right-[15%]"
        }`}
      />
      <Image
        src={leaf2}
        alt="leaf2"
        width={128}
        height={224}
        className={`absolute bottom-[5%]  rotate-[177deg] leaf3 ${
          isMobile ? "scale-200 left-0" : "scale-100 left-[15%]"
        }`}
      />
      <Image
        src={leaf1}
        alt="leaf"
        width={128}
        height={224}
        className={`absolute bottom-[5%]  rotate-[180deg] leaf4 ${
          isMobile ? "scale-200 right-[4%]" : "scale-100 right-[15%]"
        }`}
      />
    </section>
  );
}
