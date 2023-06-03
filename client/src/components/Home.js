import React, { useState, useEffect, useRef } from "react";
import Background from "../images/background.jpg";
import Avatar from "../images/ahsan.jpg";
import Addtask from "./Addtask";
import ViewTask from "./Viewtask";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);



  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) 
      ) {
        setIsMenuOpen(false);
      }
    };
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <div
      className="flex flex-col items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img
        src={Avatar}
        className="rounded-full border-4 border-black h-24 w-24 mt-12 sm:mt-52"
        alt="Avatar"
      />
      <br />
      <div
        className="flex items-center justify-between h-16 w-72 bg-gray-900 text-white rounded-lg"
        ref={menuRef}
      >
        <button className="p-2" onClick={handleMenuToggle}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M21 18h-18v-2h18v2zm0-5h-18v-2h18v2zm0-7v2h-18v-2h18z"></path>
          </svg>
        </button>
        <h1 className="text-lg font-bold">To-do today</h1>
        <div className="relative">
          <button className="p-2" onClick={handleMenuToggle}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M4 8h16l-8 8-8-8z"></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
              <div
                className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"
                onClick={handleMenuToggle}
              ></div>
              <div className="bg-white p-4 rounded-lg z-10 " ref={menuRef}>
                <Addtask />
                <button className="mt-4 text-red-500 " onClick={handleMenuToggle}>
                  View Tasks
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <br />
      <ViewTask isMenuOpen={isMenuOpen}/>
    </div>
  );
}
