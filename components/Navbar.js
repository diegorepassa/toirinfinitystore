import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { RiVipCrown2Fill as Crown } from "react-icons/ri";
import { RiVipDiamondFill as Diamond } from "react-icons/ri";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { MdMenuBook as Menu } from "react-icons/md";
import { CgProfile as Profile } from "react-icons/cg";
import { RiSettings4Fill as Settings } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  return (
    <nav className="h-5/6 h- flex flex-col justify-between items-center w-36">
      <ul className="flex flex-col justify-between items-center">
      <li className="p-4">
          <a href="#">
              <img src="/toir_logo.png" alt="NextUI" className=" w-14" />
          </a>
        </li>
        <li className="p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Crown size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Diamond size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Cart size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Menu size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      <ul className="flex flex-col justify-between items-center">
        <li className="p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Settings size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
        <li className="p-4">
          <a href="#">
            <IconContext.Provider value={{ color: "white" }}>
              <Profile size={25} fill="currentColor" />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </nav>
  );
}
