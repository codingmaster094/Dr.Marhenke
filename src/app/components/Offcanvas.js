"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleSubmenu = (e) => {
    e.stopPropagation();
    setSubmenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => pathname === path;

  const isSubmenuActive = (paths) => paths.some((path) => pathname === path);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Main Menu"
        className="p-2 sm:p-3 2xl:py-4 2xl:px-8 cursor-pointer inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors lg:hidden"
      >
        {/* Chevron Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down transform transition-transform duration-300 ${
            submenuOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 6h10" />
          <path d="M4 12h16" />
          <path d="M7 12h13" />
          <path d="M7 18h10" />
        </svg>
      </button>

      {/* Overlay (Backdrop) */}
      <div
        className={`z-[99999] fixed inset-0 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`z-[999999] fixed top-0 left-0 h-full w-[305px] bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 pb-0 text-yellow">
          <button onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
              <path d="M9 9l6 6m0 -6l-6 6" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-3 uppercase text-black text-opacity-65">
          <ul className="space-y-4">
            {/* Start Link */}
            <li>
              <Link
                href="/"
                className={`block py-2 ${
                  isActive("/") ? "text-yellow hover:text-yellow" : ""
                }`}
                onClick={closeMenu}
              >
                START
              </Link>
            </li>

            {/* Behandlungen with Submenu */}
            <li className="relative group">
              <div className="flex justify-between items-center">
                <Link
                  href="/behandlungen"
                  className={`flex py-2 ${
                    isSubmenuActive([
                      "/behandlungen",
                      "/behandlungen/einzel-und-gruppentherapie",
                      "/behandlungen/paar-und-sexualtherapie",
                      "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                      "/behandlungen/online-psychotherapie",
                      "/behandlungen/psy-rena",
                    ])
                      ? "text-yellow hover:text-yellow"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Behandlungen
                </Link>
                {/* Chevron for submenu toggle */}
                <div onClick={handleToggleSubmenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down transition-transform duration-300 ${
                      submenuOpen ? "rotate-180" : "rotate-0"
                    } ${
                      isSubmenuActive([
                        "/behandlungen",
                        "/behandlungen/einzel-und-gruppentherapie",
                        "/behandlungen/paar-und-sexualtherapie",
                        "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                        "/behandlungen/online-psychotherapie",
                        "/behandlungen/psy-rena",
                      ])
                        ? "text-yellow hover:text-yellow"
                        : ""
                    }`}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </div>
              </div>

              {/* Submenu Items */}
              <ul
                className={`transition-all duration-500 p-0 ease-in-out overflow-hidden bg-white shadow-md ${
                  submenuOpen
                    ? "max-h-[500px] opacity-100 visible"
                    : "max-h-0 opacity-0 invisible p-0"
                }`}
                style={{
                  transition:
                    "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s, padding 0.3s",
                }}
              >
                {/* Submenu Links */}
                {[
                  {
                    href: "/behandlungen/einzel-und-gruppentherapie",
                    label: "Einzel und Gruppentherapie",
                  },
                  {
                    href: "/behandlungen/paar-und-sexualtherapie",
                    label: "Paar und Sexualtherapie",
                  },
                  {
                    href: "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                    label: "Kinder und Jugendlichenpsychotherapie",
                  },
                  {
                    href: "/behandlungen/online-psychotherapie",
                    label: "Online Psychotherapie",
                  },
                  {
                    href: "/behandlungen/psy-rena",
                    label: "Psy Rena",
                  },
                ].map((item) => (
                  <li key={item.href} className="px-3 py-1">
                    <Link
                      href={item.href}
                      className={`${
                        isActive(item.href)
                          ? "text-yellow hover:text-yellow"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Über Uns */}
            <li>
              <Link
                href="/ueber-uns"
                className={`block py-2 ${
                  isActive("/ueber-uns") ? "text-yellow hover:text-yellow" : ""
                }`}
                onClick={closeMenu}
              >
                ÜBER UNS
              </Link>
            </li>

            {/* Kooperationen */}
            <li>
              <Link
                href="/kooperationen"
                className={`block py-2 ${
                  isActive("/kooperationen")
                    ? "text-yellow hover:text-yellow"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Kooperationen
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
