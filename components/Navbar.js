import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { RiVipCrown2Fill as Crown } from "react-icons/ri";
import { RiVipDiamondFill as Diamond } from "react-icons/ri";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { BsFillGridFill as Grid } from "react-icons/bs";
import { CgProfile as Profile } from "react-icons/cg";
import { RiSettings4Fill as Settings } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  return (
    <nav className="h-5/6 flex flex-col justify-between items-center w-36">
      <ul className="flex flex-col w-full justify-between items-center">
        <li>
          <img src="/logo-2.png" alt="logo" className="px-8 transition hover:scale-110" />
        </li>
        <li className="w-full flex flex-col justify-center items-center p-4 transition hover:scale-125">
          <a href="#test">
            <IconContext.Provider value={{ color: "white" }}>
              <Crown size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="w-full flex flex-col justify-center items-center p-4 transition hover:scale-125">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Diamond size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="w-full flex flex-col justify-center items-center p-4 transition hover:scale-125">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Cart size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="w-full flex flex-col justify-center items-center p-4 transition hover:scale-125">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Grid size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      <ul className="flex flex-col w-full justify-between items-center">
        <li className="w-full flex flex-col justify-center items-center p-4">
          <a href="#" className="transition hover:animate-spin">
            <IconContext.Provider value={{ color: "white" }}>
              <Settings size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="w-full flex flex-col justify-center items-center p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Avatar size="lg" src="/avatars/avatar-default.png" color="error" bordered />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </nav>
  );
}
