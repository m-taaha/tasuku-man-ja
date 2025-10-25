import React from "react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === ("/")
  const isAuthPage = location.pathname === ("/auth");

  if(!isLandingPage && !isAuthPage) return null;

  return (
    <div className="bg-gradient-to-br from-neutral-100 via-beige-100 to-neutral-200 text-neutral-900 flex flex-col">
      <nav className="flex justify-between items-center px-10 py-6">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold tracking-tight cursor-pointer"
        >
          Tasuku-Man-Ja
        </h1>
        <div className="space-x-8 hidden md:flex">
          <a href="#features" className="hover:text-neutral-600 transition">
            Features
          </a>
          <a href="#about" className="hover:text-neutral-600 transition">
            About
          </a>
          <Button
            className="bg-neutral-900 text-white hover:bg-neutral-800"
            onClick={() => navigate("/auth")}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
