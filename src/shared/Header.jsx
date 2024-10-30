/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getThemeFromLocalStorage } from "../utils/localStorage";

function Header({ vals }) {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      <div className="flex justify-between p-5 sticky top-0 bg-slate-800 ">
        <div>
          <img
            src="../../src/assets/Images/assdi-logo.png"
            alt="Logo"
            className="max-h-11"
          />
        </div>

        <span className="text-red text-sm dark:text-slate-800">
          colors doesn&apos;t set properly as per theme <br />
          so it it will pertially work
        </span>

        <div className="flex gap-2 items-center justify-center">
          <input
            className="block rounded-xl bg-gray-200 text-gray-500 px-4 py-2 pr-10 focus:outline-none"
            type="search"
            value={vals.searchTerm}
            placeholder="এখানে খুঁজুন"
            onChange={vals.handleSearch}
          />

          {/* Theme Toggle Button */}
          <label
            onClick={toggleTheme}
            className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9">
              {/* Sun Icon (Light Mode) */}
              <svg
                className={`absolute transition-all duration-500 ease-in-out fill-current text-yellow-500 transform ${
                  theme === "dark"
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-180 scale-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* Moon Icon (Dark Mode) */}
              <svg
                className={`absolute transition-all duration-500 ease-in-out fill-current text-[#15803D] transform ${
                  theme === "light"
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-180 scale-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
