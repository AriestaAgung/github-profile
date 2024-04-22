import HomeIcon from "./icons/home-icon";
import RepoIcon from "./icons/repo-icon";
import UserIcon from "./icons/user-icon";

export default function BottomBar() {
  return (
    <div className="fixed z-50 bg-main-color h-20 max-w-lg w-full border-2 border-theme-dark-color bottom-0 m-auto rounded-2xl rounded-b-none border-b-0">
      <div className="grid h-full grid-cols-3 mx-auto">
        <button className="inline-flex flex-col items-center justify-center px-5 rounded-l-lg rounded-b-none rounded-bl-none hover:bg-theme-dark-color group-hover:text-white group">
          <HomeIcon />
          <span className="text-theme-dark-color group-hover:text-main-color mt-2">
            Home
          </span>
        </button>
        <button className="inline-flex flex-col items-center justify-center px-5  hover:bg-theme-dark-color group-hover:text-white group">
          <RepoIcon />
          <span className="text-theme-dark-color group-hover:text-main-color mt-2">
            Repository
          </span>
        </button>
        <button className="inline-flex flex-col items-center justify-center px-5 rounded-r-lg rounded-b-none rounded-br-none hover:bg-theme-dark-color group-hover:text-white group">
          <UserIcon />
          <span className="text-theme-dark-color group-hover:text-main-color mt-2">
            Profile
          </span>
        </button>
      </div>
    </div>
  );
}
