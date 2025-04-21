import Link from "next/link";
import React from "react";
import { ROUTES } from "@/constants/routes";

export default function Navbar() {
  const routes = Object.entries(ROUTES);

  return (
    <nav>
      <ul className="flex items-center justify-center p-24 text-white gap-10 uppercase font-anton text-4xl md:text-8xl">
        {routes.map((item) => {
          return (
            <li key={item[0]}>
              <Link
                href={item[1]}
                className="block p-24 cursor-pointer hover:text-[#E0B8FF] transition-all duration-300"
              >
                {item[0]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
