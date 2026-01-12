const Card = ({ item }: any) => {
  return (
    <section className="relative flex h-28 w-70 flex-col rounded-xl bg-white px-4 py-3 shadow-md shadow-gray-300">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, ${item?.gradient?.from}, ${item?.gradient?.to})`,
        }}
        className={`absolute -top-5 left-4 flex h-16 w-16 items-center justify-center rounded-xl`}
      >
        {item?.icon}
      </div>

      <div className="self-end">
        <h3 className="text-grey font-light">{item?.heading}</h3>
        <p className="text-dark-blue text-right text-xl font-bold">
          {item?.data}
        </p>
      </div>

      <hr className="my-2 text-[#F0F2F5]" />

      <p className="text-grey font-light">
        <span className="font-bold text-green-600">
          {item?.footer?.highlight}
        </span>{" "}
        {item?.footer?.text}
      </p>
    </section>
  );
};

export default Card;
