import React, { useState, useEffect, useRef } from "react";
import Background from "../images/background.jpg";
import Avatar from "../images/ahsan.jpg";
import Addtask from "./Addtask";
import ViewTask from "./Viewtask";
export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("Add Task");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuRef]);

  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addTaskButton = () => {
    handleMenuClick("Add Task")
  };
  return (
    <div
      className="flex flex-col items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img
        src={Avatar}
        className="rounded-full border-4 border-black h-24 w-24 mt-52"
        alt="Avatar"
      />
      <br />
      <div
        className="flex items-center justify-between h-16 w-72 bg-gray-900 text-white rounded-lg "
        ref={menuRef}
      >
        <button className="p-2" onClick={handleMenuToggle}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M21 18h-18v-2h18v2zm0-5h-18v-2h18v2zm0-7v2h-18v-2h18z"></path>
          </svg>
        </button>
        <h1 className="text-lg font-bold">{currentMenu}</h1>
        <div className="relative" ref={menuRef}>
          <button className="p-2" onClick={handleMenuToggle}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M4 8h16l-8 8-8-8z"></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 w-72 mt-2 bg-gray-900 rounded-lg shadow-lg z-20">
              <button
                className={`block w-full text-left py-2 px-4 ${
                  currentMenu === "Add Task"
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={addTaskButton}
              >
                Add Task
              </button>
              <button
                className={`block w-full text-left py-2 px-4 ${
                  currentMenu === "View Task"
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => handleMenuClick("View Task")}
              >
                View Task
              </button>
            </div>
          )}
        </div>
      </div>
      <br />
      {currentMenu === "Add Task" && <Addtask />}
      {currentMenu === "View Task" && <ViewTask />}
    </div>
  );
}
