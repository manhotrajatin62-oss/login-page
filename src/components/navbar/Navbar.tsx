import { useNavigate } from "react-router-dom";
import { Bell, Home, Setting, User } from "../Icons";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  function clearStorage() {
    localStorage.clear();
    navigate("/login");
  }

  const [showDropdown, setShowDropdown] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex flex-wrap items-center justify-between gap-5 text-sm">
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
      </div>

      {/* search, user and notifications */}
      <div className="-ml-15 flex h-8 items-center gap-4 lg:ml-0 lg:h-11">
        <input
          placeholder="Search here"
          className="border-grey h-full w-43 rounded-lg border px-4 outline-0"
          type="search"
          name="search"
          id="search"
          autoComplete="on"
        />
        <div ref={menuRef} className="relative">
          <div onClick={() => setShowDropdown(!showDropdown)}>
            <User size={16} />
          </div>

          <div
            className={`${showDropdown ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} absolute -left-10 z-90 h-10 w-30 bg-white shadow-md shadow-gray-400 transition-all duration-200`}
          >
            <p className="p-2 text-center text-red-700">
              <span onClick={clearStorage} className="cursor-pointer">
                Logout
              </span>
            </p>
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
