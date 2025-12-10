/* eslint-disable no-unused-vars */
import Navbar from "@/Components/Navbar";
import Top from "@/Components/Top";
import Bottom from "@/Components/Buttom";
import Footer from "@/Components/Footer";
import { useContext, useEffect, useState } from "react";
import { API } from "@/Service/api";
import { DataContext } from "@/context/DataProvider";

function DashBoard({userData , isAuthenticated }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Navbar userData={userData}/>
      <div className="flex-grow p-6 flex flex-col gap-4">
        <Top userData={userData} isAuthenticated={isAuthenticated} />
        <Bottom isAuthenticated={isAuthenticated}/>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
