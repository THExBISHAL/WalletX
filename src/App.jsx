import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "sonner";

import DataProvider from "./context/DataProvider";

import Login from "./Pages/Login";
import SignUP from "./Pages/Signup";
import DashBoard from "./Pages/DashBoard";
import Transactions from "./Pages/Transactions";
import Wallet from "./Pages/Wallet";
import AboutUs from "./Pages/AboutUs";
import SendMoney from "./Pages/SendMoney";

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DataProvider>
      <Toaster richColors />

      <Routes>
        <Route path="/register" element={<SignUP />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<DashBoard />} />
        </Route>
        <Route
          path="/history"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/history" element={<Transactions />} />
        </Route>
        <Route
          path="/wallet"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/wallet" element={<Wallet />} />
        </Route>
        <Route
          path="/wallet/:name"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/wallet/:name" element={<SendMoney />} />
        </Route>
        <Route
          path="/aboutus"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
