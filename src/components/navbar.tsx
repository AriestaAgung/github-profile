import Image from "next/image";
import GithubLogo from "./icons/github-logo";
import MenuIcon from "./icons/menu-icon";

export default function Navbar() {
  return (
    <nav className="bg-teal-500 max-w-full max-h-24 rounded-b-lg">
      <div className="flex flex-row items-center justify-between px-5 py-5">
        <a href="/">
          <GithubLogo />
        </a>

        <button className="hover:bg-teal-800 rounded-lg ">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}
