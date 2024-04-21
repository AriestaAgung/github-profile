"use client";

import Image from "next/image";
import GithubLogo from "./icons/github-logo";
import MenuIcon from "./icons/menu-icon";
import { useState } from "react";
import exp from "constants";
import SearchIcon from "./icons/search-icon";

export default function Navbar() {
  const [expand, isExpanded] = useState(false);
  const clickAction = () => {
    isExpanded(!expand);
    console.log(expand);
  };

  return (
    <nav className="bg-theme-dark-color max-w-full max-h-20 rounded-b-lg items-center">
      <div className="flex flex-row justify-between px-5 py-5 max-h-20">
        <div className="flex items-center">
          <a href="/">
            <GithubLogo />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className={`hover:bg-secondary-color rounded-lg`}
            onClick={clickAction}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      <div
        className={` ${
          expand ? "block" : "hidden"
        }  bg-secondary-dark-color ring-theme-dark-color ring-2 rounded-2xl mt-2`}
      >
        <ul className="">
          <li className="block  hover:bg-secondary-color text-white px-4 py-2 rounded-2xl rounded-b-none">
            Home
          </li>
          <li className="block hover:bg-secondary-color text-white px-4 py-2">
            Repository
          </li>
          <li className="block hover:bg-secondary-color text-white px-4 py-2">
            Search
          </li>
          <li className="block hover:bg-secondary-color text-white px-4 py-2 rounded-2xl rounded-t-none">
            Profile
          </li>
        </ul>
      </div>
    </nav>
  );
}
