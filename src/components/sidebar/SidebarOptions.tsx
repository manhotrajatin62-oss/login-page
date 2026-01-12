import { Dropdown } from "../Icons";

const SidebarOptions = ({
  icon,
  img,
  title,
  dropdown,
  active,
  subActive,
  activeDropdown,
}: any) => {
  return (
    <div
      className={`${subActive ? "bg-[#E91F63]" : "hover:bg-mud"} ${active ? "bg-mud" : ""} flex h-10 cursor-pointer items-center justify-between rounded-sm px-3 text-sm`}
    >
      <div className="flex items-center gap-2">
        {img ? (
          <img src={img} alt="Profile Picture" />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center">{icon}</div>
        )}
        <h2>{title}</h2>
      </div>
      {dropdown && <Dropdown activeDropdown={activeDropdown} />}
    </div>
  );
};

export default SidebarOptions;
