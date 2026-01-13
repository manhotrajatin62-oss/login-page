import { Clock } from "./Icons";

const ChartCard = ({ item }: any) => {
  return (
    <section className="relative flex h-61 w-81 flex-col rounded-lg bg-white px-4 py-3 text-xs shadow-md shadow-gray-400">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, ${item?.gradient?.from}, ${item?.gradient?.to})`,
          boxShadow: `0 2px 2px ${item?.shadow}`,
        }}
        className="absolute -top-5 left-4 h-40 w-73 rounded-lg shadow-md"
      >
        {item?.chart}
      </div>

      <div className="mx-1.5 mt-35">
        <h3 className="text-dark-blue text-sm font-bold">{item?.heading}</h3>
        <p className="text-grey">{item?.subHeading}</p>
      </div>

      <hr className="my-3 text-[#F0F2F5]" />

      <p className="text-grey mx-1.5 flex items-center gap-1">
        <Clock />
        {item?.paragraph}
      </p>
    </section>
  );
};

export default ChartCard;
