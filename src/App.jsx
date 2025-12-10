import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : {};
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).isLogged || false : false;
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setIsAuthenticated(parsedUser.isLogged || false);
      setUserData(parsedUser);
    }
  }, []);

  return (
    <DataProvider>
      <Toaster richColors />

      <Routes>
        <Route path="/register" element={<SignUP />} />
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setUserData={setUserData}
            />
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          }
        >
          <Route index="true" element={<DashBoard userData={userData} isAuthenticated={isAuthenticated} />} />
        </Route>
        <Route
          path="/history"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          }
        >
          <Route
            path="/history"
            element={<Transactions userData={userData} />}
          />
        </Route>
        <Route
          path="/wallet"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          }
        >
          <Route path="/wallet" element={<Wallet userData={userData} />} />
        </Route>
        <Route
          path="/wallet/:name"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          }
        >
          <Route
            path="/wallet/:name"
            element={<SendMoney userData={userData} />}
          />
        </Route>
        <Route
          path="/aboutus"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          }
        >
          <Route path="/aboutus" element={<AboutUs userData={userData} />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
