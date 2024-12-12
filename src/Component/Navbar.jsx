import React from "react";
import { useState, useEffect } from "react";
import Logo from "/logo.jpeg";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    }
  };

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div>
      <div className="navbar">
        <div className="flex-1 flex items-center justify-center">
          <button onClick={handleClick} className="ml-2 text-3xl flex mt-5">
            {" "}
            <img src={Logo} alt="Logo" className="mr-4" /> Weather Application
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
