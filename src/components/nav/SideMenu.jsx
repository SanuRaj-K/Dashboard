import React from "react";
import { sideMenuList } from "../../data/sideMenuList";
import { Logo, Sign } from "../../data/iconsData";

function SideMenu() {
  return (
    <div className="  flex flex-col  justify-between items-center py-4 h-screen bg-black rounded-[50px] ">
      <div>
        <img src={Logo} width={36} height={36} alt="logo" />
      </div>
      <div>
        <ul className=" flex-center flex-col">
          {sideMenuList.map((menu, index) => (
            <li key={index} className=" mb-3 cursor-pointer last:mb-0">
              <img width={36} height={36} src={menu} alt="menu" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src={Sign} width={36} height={36} alt="Sign" />
      </div>
    </div>
  );
}

export default SideMenu;
