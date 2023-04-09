import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="Header opacity-95 flex flex-row justify-between items-center">
      <h1 className="font-bold text-4xl md:text-6xl">💭 Redux Blog</h1>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col align-top justify-between min-h-[250px] font-bold mt-10">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link
                  to="/"
                  className="text-green-700 visited:text-green-500 visited:no-underline"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link
                  to="post"
                  className="text-green-700 visited:text-green-500 visited:no-underline"
                >
                  Create Post
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link
                  to="user"
                  className="text-green-700 visited:text-green-500 visited:no-underline"
                >
                  User
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-4 lg:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Create Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
      </nav>
      <style>
        {`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: top;
            align-items: center;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
