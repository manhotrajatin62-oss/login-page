import { Bell, Home, Menu, Setting, User } from "../Icons";

const Navbar = () => {
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
          type="text"
          name="search"
          id="search"
          autoComplete="on"
        />
        <User />
        <div className="flex items-center ml-2 gap-4 mr-5">
          <Setting />
          <div className="relative">
            <Bell />
            <p className="bg-red py-0.5 px-2 rounded-full text-white text-xs absolute -top-2.5 -right-4.5">11</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
