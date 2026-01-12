import { BrandLogo, Dashboard, Dropdown } from "../../../components/Icons";
import profile from "../../../assets/profile.png";
import SidebarOptions from "./SidebarOptions";
import { useState } from "react";

const SidebarTop = () => {
  const [activeDropdown, setActiveDropdown] = useState(true);

  return (
    <section>
      {/* logo */}
      <div className="flex items-center gap-2 font-bold whitespace-nowrap">
        <BrandLogo />
        <h1>Material Dashboard 2 PRO</h1>
      </div>

      <hr className="my-3" />

      {/* user profile */}
      <SidebarOptions img={profile} title={"Brooklyn Alice"} dropdown />

      <hr className="my-3" />

      {/* Dashboard dropdown */}
      <div className="flex flex-col gap-1">
        <div onClick={() => setActiveDropdown(!activeDropdown)}>
          <SidebarOptions
            activeDropdown={activeDropdown}
            active
            icon={<Dashboard />}
            title={"Dashboard"}
            dropdown
          />
        </div>

        <div
          className={`${activeDropdown ? "h-22" : "h-0"} flex flex-col gap-1 overflow-hidden transition-[height] duration-300 ease-in-out`}
        >
          <SidebarOptions icon={"A"} subActive title={"Analytics"} />
          <SidebarOptions icon={"S"} title={"Smart Home"} />
        </div>
      </div>
    </section>
  );
};

export default SidebarTop;
