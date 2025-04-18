import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="px-5 sm:px-10 py-5 w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          alt="fliq logo"
          width={30}
          height={30}
          priority
        />
        <h1 className="text-2xl flex flex-col items-end uppercase font-medium">
          Fliq
          <span
            style={{ fontSize: "7px" }}
            className="text-xs -mt-1 normal-case font-normal"
          >
            by Blend
          </span>
        </h1>
      </div>
      <nav className="hidden sm:inline-block">
        <ul className="flex gap-16 items-center">
          <li className="">
            <a href="#" className="appearance-none sub-text hover:opacity-70 ">
              Solutions
            </a>
          </li>
          <li className="">
            <a href="#" className="appearance-none sub-text hover:opacity-70 ">
              Learn
            </a>
          </li>
          <li className="">
            <a href="#" className="appearance-none sub-text hover:opacity-70 ">
              About
            </a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="px-4 hidden sm:inline-block py-1.5 cursor-pointer hover:opacity-70 rounded-2xl bg-[#6A5ACD]"
      >
        Join the waitlist
      </button>
      <span className="w-10 sm:hidden h-10 flex justify-center items-center">
        <GiHamburgerMenu />
      </span>
    </header>
  );
}
