import Links from "./Links";

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
  return (
    <nav>
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

      <ul className="flex gap-5 justify-center mt-5">
        {
            navigationData.map(route => <li   key={route.id}>
                <Links route={route} />
            </li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
