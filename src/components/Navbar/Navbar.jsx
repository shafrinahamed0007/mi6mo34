import { Menu, X } from "lucide-react";
import Links from "./Links";
import { useState } from "react";

const navigationData = [
  {
    id: "nav-home",
    name: "Home",
    path: "/",
  },
  {
    id: "nav-products",
    name: "Products",
    path: "/products",
  },
  {
    id: "nav-about",
    name: "About Us",
    path: "/about",
  },
  {
    id: "nav-blog",
    name: "Blog",
    path: "/blog",
  },
  {
    id: "nav-contact",
    name: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between w-11/12 mx-auto mt-5">
      <span className="flex gap-2">
        <span className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}

          <div className="md:hidden">
            <ul className="my-2  ">
              {navigationData.map((route) => (
                <li key={route.id}>
                  <Links route={route} />
                </li>
              ))}
            </ul>
          </div>
        </span>

        <h3>My Navbar</h3>
      </span>
      <div className="hidden md:block">
        <ul className="flex gap-5  ">
          {navigationData.map((route) => (
            <li key={route.id}>
              <Links route={route} />
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-ghost">Sign In</button>

      {/* <ul className="flex gap-4 justify-center my-5 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">BLog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
