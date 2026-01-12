import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <header className="ml-75 mt-10 mr-8 mb-6">
        <Navbar/>
      </header>

      <main>
        <Sidebar />
      </main>

      <footer></footer>
    </>
  );
};

export default Dashboard;
