import { useNavigate } from "react-router-dom";
import { Bell, Home, Menu, Setting, User } from "../Icons";

const Navbar = () => {

  const navigate = useNavigate()

  function clearStorage(){
    localStorage.clear();
    navigate("/login")
  }

  return (
    <nav className="flex items-center justify-between text-sm">
      {/* breadcrumbs */}
      <div className="flex items-center gap-2">
        <div className="flex w-50 flex-col">
          <div className="flex items-center justify-start gap-2">
            <Home />
            <pre className="text-dark-blue">
              <span className="text-grey">/ Pages / </span> Analytics
            </pre>
          </div>
          <h3 className="text-dark-blue font-bold">Analytics</h3>
        </div>

        <Menu />
      </div>

      {/* search, user and notifications */}
      <div className="flex h-11 items-center gap-4">
        <input
          placeholder="Search here"
          className="border-grey h-full w-43 rounded-lg border px-4 outline-0"
          type="search"
          name="search"
          id="search"
          autoComplete="on"
        />
        <div className="relative group">
          <User />

       <div className="w-30 absolute h-10 transition-all duration-200 -left-10 opacity-0 group-hover:opacity-100 z-90 bg-white shadow-md shadow-gray-400">
            <p onClick={clearStorage} className="p-2 cursor-pointer text-red-700 text-center">Logout</p>
          </div>
        </div>
        <div className="mr-5 ml-2 flex items-center gap-4">
          <Setting />
          <div className="relative">
            <Bell />
            <p className="bg-red absolute -top-2.5 -right-4.5 rounded-full px-2 py-0.5 text-xs text-white">
              11
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
