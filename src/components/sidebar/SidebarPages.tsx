import SidebarOptions from "./SidebarOptions";

const SidebarPages = ({ data, heading }: any) => {
  return (
    <section>
      <h2 className="my-2 text-xs font-bold">{heading}</h2>

      {data?.map((item: any) => {
        return (
          <SidebarOptions
          key={item?.title}
            icon={item?.icon}
            title={item?.title}
            dropdown={item?.dropdown}
          />
        );
      })}
    </section>
  );
};

export default SidebarPages;
