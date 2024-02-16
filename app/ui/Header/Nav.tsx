"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <nav>
         <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden md:invisible bg-[var(--clr-primary-5)] text-white w-[3.75rem] h-[2.25rem] flex items-center justify-center cursor-pointer text-[1.5rem] rounded-[2rem] transition"
         >
            <Image
               src="./bars.svg"
               alt="bars"
               width={21}
               height={24}
            ></Image>
         </button>
         {isOpen && (
            <div className="w-[90vw] h-[95vh] max-w-[var(--fixed-width)] bg-white rounded-[var(--radius)] shadow-[var(--dark-shadow)] fixed top-0 left-0 p-[4rem]">
               <button
                  onClick={() => setIsOpen(false)}
                  className="fixed top-10 right-10"
               >
                  <Image
                     src="./x-letter.svg"
                     alt="exit button"
                     width={22}
                     height={32}
                  ></Image>
               </button>
               <ul className="flex flex-col gap-7 items-baseline h-full justify-center">
                  <li onClick={() => setIsOpen(false)}>
                     <Link
                        href="/"
                        className="flex items-center gap-5 text-[1.5rem]"
                     >
                        <Image
                           src="./home.svg"
                           alt="home"
                           width={30}
                           height={24}
                        ></Image>
                        Home
                     </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link
                        href="/products"
                        className="flex items-center gap-5 text-[1.5rem]"
                     >
                        <Image
                           src="./products.svg"
                           alt="home"
                           width={30}
                           height={24}
                        ></Image>
                        Products
                     </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link
                        href="/about"
                        className="flex items-center gap-5 text-[1.5rem]"
                     >
                        <Image
                           src="./help-about-symbolic.svg"
                           alt="home"
                           width={30}
                           height={24}
                        ></Image>
                        About
                     </Link>
                  </li>
               </ul>
            </div>
         )}
      </nav>
   );
}
