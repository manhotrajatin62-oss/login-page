import Card from "../../components/Card";
import ChartCard from "../../components/ChartCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { cardsData, chartsData } from "../../components/cardsData.tsx";
import DataTable from "react-data-table-component";
import table1 from "../../assets/table/table1.png";
import table2 from "../../assets/table/table2.png";
import table3 from "../../assets/table/table3.png";
import table4 from "../../assets/table/table4.png";
import { GreenDown, RedUp } from "../../components/Icons.tsx";

const Dashboard = () => {
  const customStyles = {
    headCells: {
      style: {
        color: "#7B809A",
        fontWeight: "700",
        fontSize: "0.75rem",
      },
    },
  };

  const columns = [
    {
      name: <div style={{ paddingLeft: "1rem" }}>PRODUCT</div>,
      grow: 4,
      cell: (row: any) => (
        <div className="flex items-center gap-4 py-3 pl-4 text-sm">
          <img src={row.image} alt="product" />
          <div className="text-left">
            <p className="text-dark-blue font-bold">{row.title}</p>
            <p className="text-grey">
              <span className="text-green-600">{row.orders}</span> orders
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "VALUE",
      cell: (row: any) => <span className="text-grey">{row.value}</span>,
      center: true,
    },
    {
      name: "ADS SPENT",
      cell: (row: any) => <span className="text-grey">{row.ads}</span>,
      center: true,
    },
    {
      name: "REFUNDS",
      cell: (row: any) => (
        <div className="text-grey flex items-center justify-center gap-1.5">
          {row.refunds}
          {row.profit ? <GreenDown /> : <RedUp />}
        </div>
      ),
      center: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Nike v22 Running",
      orders: "8.232",
      image: table1,
      value: "$130.992",
      ads: "$9.500",
      refunds: 13,
      profit: true,
    },
    {
      id: 2,
      title: "Business Kit (Mug + Notebook)",
      orders: "12.821",
      image: table2,
      value: "$80.250",
      ads: "$4.200",
      refunds: 40,
      profit: true,
    },
    {
      id: 3,
      title: "Black Chair",
      orders: "2.421",
      image: table2,
      value: "$40.600",
      ads: "$9.430",
      refunds: 54,
      profit: false,
    },
    {
      id: 4,
      title: "Wireless Charger",
      orders: "5.921",
      image: table3,
      value: "$91.300",
      ads: "$7.364",
      refunds: 5,
      profit: true,
    },
    {
      id: 5,
      title: "Mountain Trip Kit (Camera + Backpack)",
      orders: "921",
      image: table4,
      value: "$140.925",
      ads: "$20.531",
      refunds: 121,
      profit: false,
    },
  ];

  return (
    <>
      <header className="mt-10 mr-8 mb-6 ml-70">
        <Navbar />
      </header>

      <main className="mr-5 ml-65">
        <Sidebar />

        {/* 1st row */}
        <section className="flex h-38 items-end gap-5 text-sm">
          {cardsData?.map((item) => {
            return <Card key={item?.heading} item={item} />;
          })}
        </section>

        {/* 2nd row */}
        <section className="mt-12 flex items-center gap-6">
          {chartsData?.map((item: any) => {
            return <ChartCard key={item?.heading} item={item} />;
          })}
        </section>

        {/* 3rd row */}
        <section className="mt-6 mb-10 rounded-xl bg-white shadow-md shadow-gray-400">
          <h1 className="text-dark-blue mb-5 pt-7 pl-6 font-bold">
            Top Selling Products
          </h1>

          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Dashboard;
