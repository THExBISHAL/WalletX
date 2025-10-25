import Navbar from "@/Components/Navbar";
import Top from "@/Components/Top";
import Bottom from "@/Components/Buttom";
import Footer from "@/Components/Footer";
import { useContext, useEffect, useState } from "react";
import { API } from "@/Service/api";
import { DataContext } from "@/context/DataProvider";

function DashBoard() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Navbar />
      <div className="flex-grow p-6 flex flex-col gap-4">
        <Top />
        <Bottom />
      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
