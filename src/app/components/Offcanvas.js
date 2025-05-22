"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Main Menu"
        className="p-2 sm:p-3 2xl:py-4 2xl:px-8 cursor-pointer inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors lg:hidden"
      >
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
        <div className="flex justify-end p-4 pb-0 text-yellow">
          <button onClick={() => setIsOpen(false)}>
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

        {/* Navigation */}
        <nav className="p-4 space-y-3 uppercase text-black text-opacity-65">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "text-yellow block py-2 hover:text-yellow"
                    : ""
                }
                onClick={() => setIsOpen(false)}
              >
                START
              </Link>
            </li>
            <li className="relative group ">
              <div className="flex justify-between items-center">
                <Link
                  href="/behandlungen"
                  className={
                    [
                      "/behandlungen",
                      "/behandlungen/einzel-und-gruppentherapie",
                      "/behandlungen/paar-und-sexualtherapie",
                      "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                      "/behandlungen/online-psychotherapie",
                      "/behandlungen/psy-rena",
                    ].includes(pathname)
                      ? "text-yellow flex py-2 hover:text-yellow"
                      : ""
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Behandlungenabc  
                </Link>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSubmenuOpen(!submenuOpen);
                  }}
                >
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
                    className={`
    icon icon-tabler icons-tabler-outline icon-tabler-chevron-down
    transform transition-transform duration-300
    ${submenuOpen ? "rotate-180" : "rotate-0"}
    ${
      [
        "/behandlungen",
        "/behandlungen/einzel-und-gruppentherapie",
        "/behandlungen/paar-und-sexualtherapie",
        "/behandlungen/kinder-und-jugendlichenpsychotherapie",
        "/behandlungen/online-psychotherapie",
        "/behandlungen/psy-rena",
      ].includes(pathname)
        ? "text-yellow hover:text-yellow"
        : ""
    }
  `}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </div>
              </div>
              <ul
                className={`transition-all duration-500 p-0 ease-in-out overflow-hidden  bg-white shadow-md ${
                  submenuOpen
                    ? "max-h-[500px] opacity-100 visible p-3"
                    : "max-h-0 opacity-0 invisible p-0"
                }`}
                style={{
                  transition:
                    "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s, padding 0.3s",
                }}
              >
                {/* <ul className="sub-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white p-2 rounded-lg"> */}
                <li className="px-3 py-1">
                  <Link
                    className={` ${
                      pathname === "/behandlungen/einzel-und-gruppentherapie"
                        ? "text-yellow block hover:text-yellow"
                        : ""
                    }
                        `}
                    href="/behandlungen/einzel-und-gruppentherapie"
                    onClick={() => setIsOpen(false)}
                  >
                    Einzel und Gruppentherapie
                  </Link>
                </li>
                <li className="px-3 py-1">
                  <Link
                    className={`
                      ${
                        pathname === "/behandlungen/paar-und-sexualtherapie"
                          ? "text-yellow block  hover:text-yellow"
                          : ""
                      }
                    `}
                    href="/behandlungen/paar-und-sexualtherapie"
                    onClick={() => setIsOpen(false)}
                  >
                    Paar und Sexualtherapie
                  </Link>
                </li>
                <li className="px-3 py-1">
                  <Link
                    className={`
                      ${
                        pathname ===
                        "/behandlungen/kinder-und-jugendlichenpsychotherapie"
                          ? "text-yellow block  hover:text-yellow"
                          : ""
                      }`}
                    href="/behandlungen/kinder-und-jugendlichenpsychotherapie"
                    onClick={() => setIsOpen(false)}
                  >
                    Kinder und Jugendlichenpsychotherapie
                  </Link>
                </li>
                <li className="px-3 py-1">
                  <Link
                    className={`
                      ${
                        pathname === "/behandlungen/online-psychotherapie"
                          ? "text-yellow block  hover:text-yellow"
                          : ""
                      }
                    `}
                    href="/behandlungen/online-psychotherapie"
                    onClick={() => setIsOpen(false)}
                  >
                    Online Psychotherapie
                  </Link>
                </li>
                <li className="px-3 py-1">
                  <Link
                    className={`
                      ${
                        pathname === "/behandlungen/psy-rena"
                          ? "text-yellow block  hover:text-yellow"
                          : ""
                      }
                    `}
                    href="/behandlungen/psy-rena"
                    onClick={() => setIsOpen(false)}
                  >
                    Psy Rena
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/ueber-uns"
                className={
                  pathname === "/ueber-uns"
                    ? " text-yellow block  hover:text-yellow"
                    : ""
                }
                onClick={() => setIsOpen(false)}
              >
                ÜBER UNS
              </Link>
            </li>
            <li>
              <Link
                href="/kooperationen"
                className={
                  pathname === "/kooperationen"
                    ? "text-yellow block  hover:text-yellow"
                    : ""
                }
                onClick={() => setIsOpen(false)}
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
