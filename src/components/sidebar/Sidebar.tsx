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

  return (
    <aside className="fixed top-4 bottom-4 left-4 flex w-55 flex-col overflow-auto custom-scroll rounded-xl bg-linear-to-b from-[#3E3D45] to-[#202020] p-4 text-sm text-white">
      <SidebarTop />

      <SidebarPages heading={"PAGES"} data={pagesData} />

      <hr className="my-3" />

      <SidebarPages heading={"DOCS"} data={docsData} />
    </aside>
  );
};

export default Sidebar;
