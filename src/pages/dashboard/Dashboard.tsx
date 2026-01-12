import Card from "../../components/Card";
import { Chart, Contact, Market, User } from "../../components/Icons";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  const cardsData = [
    {
      heading: "Bookings",
      data: "281",
      footer: {
        highlight: "+55%",
        text: "than last week",
      },
      icon: <User card />,
      gradient: {
        from: "#3E3D45",
        to: "#202020",
      },
    },
    {
      heading: "Today's Users",
      data: "2,300",
      footer: {
        highlight: "+3%",
        text: "than last week",
      },
      icon: <Chart />,
      gradient: {
        from: "#E93B77",
        to: "#DA1F63",
      },
    },
    {
      heading: "Revenue",
      data: "34k",
      footer: {
        highlight: "+1%",
        text: "than yesterday",
      },
      icon: <Market />,
      gradient: {
        from: "#63B967",
        to: "#4BA64F",
      },
    },
    {
      heading: "Followers",
      data: "+91",
      footer: {
        text: "Just updated",
      },
      icon: <Contact />,
      gradient: {
        from: "#439DEE",
        to: "#1E78E9",
      },
    },
  ];

  return (
    <>
      <header className="mt-10 mr-8 mb-6 ml-70">
        <Navbar />
      </header>

      <main className="mr-5 ml-65">
        <Sidebar />

        <section className="flex h-38 items-end gap-5 text-sm">
          {cardsData?.map((item) => {
            return <Card key={item?.heading} item={item} />;
          })}
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Dashboard;
