import Navbar from "@/Components/Navbar";
import { DataContext } from "@/context/DataProvider";
import { API } from "@/Service/api";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const { account } = useContext(DataContext);
  const initialValue = {
    sourceWalletId: 0,
    destinationWalletId: 0,
    amount: 0.0,
  };

  const [howWhat, setHowWhat] = useState(initialValue);
  const navigate = useNavigate();
  const people = ["Aditi", "Priya", "Vikram", "Sara"];
  const [wallet, setWallet] = useState({});
  console.log(wallet);
  const id = wallet?.id?.toString();
  console.log(id);

  const onValueChange = (e) => {
    setHowWhat({ ...howWhat, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const createWallet = async () => {
      const response = await API.createWallet({ userId: account.userId });
      if (response?.isSuccess) {
        setWallet(response.data);
      }
    };
    createWallet();
  }, []);

  // const searchAndTransfer = async () => {
  //   console.log(howWhat, "howWhat");
  //   let response = await API.transferMoney(howWhat);
  //   if (response?.isSuccess) {
  //     console.log(response);
  //   } else {
  //     console.log("Error sending money");
  //   }
  // };

  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar />

      {/* Main Container */}
      <div className="lg:mx-20 mx-5 lg:mt-5 mt-3">
        {/* Search Bar */}
        <div className="flex items-center gap-3 mb-6">
          <input
            onChange={(e) => {
              onValueChange(e);
            }}
            type="text"
            name="destinationWalletId"
            placeholder="Search for a person by wallet id"
            className="flex-1 lg:p-3 p-2 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            onChange={(e) => {
              onValueChange(e);
            }}
            type="number"
            name="amount"
            placeholder="Enter amount to send"
            className="flex-1 lg:p-3 p-2 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            onClick={() => {
              searchAndTransfer();
            }}
            className="bg-blue-800 text-white px-5 lg:py-3 py-2 rounded-xl hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* People List */}
        {/* <div className="flex flex-col gap-5">
          {people.map((name, i) => (
            <div
              key={i}
              onClick={() => navigate(`/wallet/${name}`)}
              className="flex items-center justify-between bg-slate-100 p-5 rounded-xl shadow-md hover:shadow-lg transition w-full cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
                  alt={name}
                  className="w-16 h-16 rounded-full"
                />
                <h3 className="text-lg font-medium text-gray-800">{name}</h3>
              </div>

              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
                Send
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Wallet;
