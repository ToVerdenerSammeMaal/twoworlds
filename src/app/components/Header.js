"use client";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NameSwitch from "./NameSwitch";
import Link from "next/link";

export default function Header({ player, handlePlayerChange }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Logo />
      <NameSwitch setPlayer={handlePlayerChange} player={player} />
      <Hamburger open={open} handleClick={() => setOpen(!open)} />
      <div
        className={`overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setOpen(false);
          } else if (event.key === "Escape" && open) {
            setOpen(false);
          }
        }}
        role="button"
      >
        {open && (
          <ul className="overlay-menu flex">
            <div className="main-links">
              <Link href="/#om-projektet">
                <li className="hover-orange">om projektet</li>
              </Link>
              <Link href="/mark">
                <li className="hover-orange">om mark</li>
              </Link>
              <Link href="/claudine">
                <li className="hover-orange">om claudine</li>
              </Link>
              <Link href="/#hvem-er-vi">
                <li className="hover-orange">Hvem er vi</li>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
}
