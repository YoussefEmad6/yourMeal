import React from "react";
import NabButton from "../../Buttons/NabButton";

export const NAV_LINKS = [
  { href: "/", key: "Home", label: "Home" },
  { href: "/", key: "Menu", label: "Menu" },
  { href: "/", key: "Shop", label: "Shop" },
  { href: "/", key: "Service ", label: "Service" },
  // { href: "/", key: "contact_us", label: "Contact Us" },
];

const Header = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <a href="/">
        <img src="/favicon.ico" alt="logo" width={74} height={29} />
      </a>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="regular-16 text-s1 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </a>
        ))}
      </ul>

      <div className="hidden h-full gap-12 lg:flex">
        {/* <Button 
      type="button"
      title="Login"
      icon="/user.svg"
      variant="btn_dark_green"
    /> */}

        <button
          href="/"
          className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
        >
          Sign in
        </button>
        <button
          href="/"
          className="text-s1 bg-p1 hover:bg-p3 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2 me-2 mb-2"
        >
          Login
        </button>
      </div>

      {/* <Image 
    src="menu.svg"
    alt="menu"
    width={32}
    height={32}
    className="inline-block cursor-pointer lg:hidden"
  /> */}
    </nav>
  );
};

export default Header;
