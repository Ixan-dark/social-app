import React from "react";
import Logo from "../logo/Logo";
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="h-[50px] w-full bg-green-600 flex items-center sticky top-0">
      <div className="left">
        <div className="logodiv">
          <Logo />
        </div>
      </div>
      <div className="center">
        <div className="searchbar">
          <IoSearch />
          <input type="text" className="seach" />
        </div>
      </div>
      <div className="right">
        <div className="tabLinks">
          <div className="tabLink1">Home</div>
          <div className="tabLink2">Timeline</div>
        </div>
        <div className="tabIcons">
          <div className="tabIcon1">
            <IoPersonSharp />
            <span>1</span>
          </div>
          <div className="tabIcon1">
            <IoChatboxEllipses />
            <span>2</span>
          </div>
          <div className="tabIcon1">
            <IoIosNotifications />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
