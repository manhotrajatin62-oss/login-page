import Card from "../../components/Card";
import ChartCard from "../../components/ChartCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { cardsData, chartsData } from "../../components/cardsData.tsx";

const Dashboard = () => {
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
        <section className="mt-6 rounded-xl shadow-md shadow-gray-400"></section>
      </main>

      <footer></footer>
    </>
  );
};

export default Dashboard;
