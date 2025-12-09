import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { API } from "@/Service/api";

function Navbar() {
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const initialValue = {
    balance: "",
    id: "",
    isActive: false,
    userId: "",
  };

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Wallet", path: "/wallet" },
    { name: "Transactions", path: "/history" },
    { name: "About Us", path: "/aboutus" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    setAccount("");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-blue-950 text-gray-200 shadow-lg">
      <h2 className="text-2xl font-bold font-serif cursor-default">WalletX</h2>

      {/* -------- Desktop Menu -------- */}
      <div className="hidden lg:flex gap-12 text-md font-mono">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `transition-transform duration-200 ease-in-out hover:scale-103 ${
                isActive ? "text-yellow-700 font-semibold" : "text-gray-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* -------- Profile Section -------- */}
      <div className="hidden lg:flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-blue-900 w-40 h-25 text-gray-100 border border-black flex flex-col justify-around items-center">
            <DropdownMenuLabel>{"THExBISHAL"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col justify-between gap-3 pb-2 font-medium">
              {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
              <DropdownMenuItem onClick={logout}>Log Out</DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="font-mono">{"THExBISHAL"}</span>
      </div>

      {/* -------- Mobile Menu -------- */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu size={24} />
          </SheetTrigger>
          <SheetContent className="bg-blue-900 min-h-screen">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-gray-100 font-medium">
                    {"THExBISHAL"}
                  </span>
                </div>
              </SheetTitle>

              <div className="text-gray-100 flex flex-col items-center gap-6 mt-16">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg transition-all ${
                        isActive
                          ? "text-yellow-600 font-semibold "
                          : "text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <p className="mt-4 text-gray-300 hover:text-white cursor-pointer">
                  Log Out
                </p>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
