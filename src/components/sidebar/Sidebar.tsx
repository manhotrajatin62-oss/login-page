import { useState } from "react";
import {
  Application,
  Authentication,
  Basic,
  Changelog,
  Components,
  Ecommerce,
  Pages,
} from "../Icons";
import SidebarPages from "./SidebarPages";
import SidebarTop from "./SidebarTop";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";

const Sidebar = () => {
  const pagesData = [
    {
      icon: <Pages />,
      title: "Pages",
      dropdown: true,
    },
    {
      icon: <Application />,
      title: "Applications",
      dropdown: true,
    },
    {
      icon: <Ecommerce />,
      title: "Ecommerce",
      dropdown: true,
    },
    {
      icon: <Authentication />,
      title: "Authentication",
      dropdown: true,
    },
    {
      icon: "E",
      title: "Error",
      dropdown: true,
    },
    {
      icon: "B",
      title: " Error 404",
      dropdown: false,
    },
    {
      icon: "C",
      title: " Error 500",
      dropdown: false,
    },
  ];

  const docsData = [
    {
      icon: <Basic />,
      title: "Basic",
      dropdown: true,
    },
    {
      icon: <Components />,
      title: "Components",
      dropdown: true,
    },
    {
      icon: <Changelog />,
      title: "Changelog",
      dropdown: false,
    },
  ];

  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <aside className="block lg:hidden">
        <section
          onClick={() => setSidebar(true)}
          className="absolute top-5 left-5 z-97 rounded-md bg-linear-to-b from-[#3E3D45] to-[#202020] p-2"
        >
          <IoMenu color="white" size={20} />
        </section>

        {sidebar && (
          <div
            onClick={() => setSidebar(false)}
            className="fixed top-0 right-0 bottom-0 left-0 z-98 bg-black/40"
          />
        )}

        <aside
          className={`${sidebar ? "left-0" : "-left-100"} custom-scroll fixed top-0 bottom-0 z-99 flex w-55 flex-col overflow-auto bg-linear-to-b from-[#3E3D45] to-[#202020] p-4 pt-10 text-sm text-white transition-all duration-300 xl:hidden`}
        >
          <IoCloseCircleOutline
            onClick={() => setSidebar(false)}
            className="absolute top-2 right-2"
            size={20}
            color="white"
          />
          <SidebarTop />

          <SidebarPages heading={"PAGES"} data={pagesData} />

          <hr className="my-3" />

          <SidebarPages heading={"DOCS"} data={docsData} />
        </aside>
      </aside>

      <aside className="custom-scroll fixed top-4 bottom-4 left-4 hidden w-55 flex-col overflow-auto rounded-xl bg-linear-to-b from-[#3E3D45] to-[#202020] p-4 text-sm text-white lg:flex">
        <SidebarTop />

        <SidebarPages heading={"PAGES"} data={pagesData} />

        <hr className="my-3" />

        <SidebarPages heading={"DOCS"} data={docsData} />
      </aside>
    </>
  );
};

export default Sidebar;
