import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const people = ["Aditi", "Priya", "Vikram", "Sara"];

  //   const onValueChange = (e) => {
  //   setLoginData({ ...loginData, [e.target.name]: e.target.value });
  // };

  const onValueChange = (e) => {
    setSearch(e.target.value);
  };

  const searchUser = async () => {
    console.log(search);

    // let response = await API.userLogin(loginData);
    // if (response?.isSuccess) {
    //   sessionStorage.setItem(
    //     "accessToken",
    //     `Bearer ${response.data.accessToken}`
    //   );
    //   sessionStorage.setItem(
    //     "refreshToken",
    //     `Bearer ${response.data.refreshToken}`
    //   );
    //   setAccount({
    //     name: response.data.name,
    //   });
    //   setLoginData(initialState);
    //   setIsAuthenticated(true);
    //   toast(response.data.message);
    //   navigate("/");
    // } else {
    //   toast("Invalid credentials. Try again!");
    // }
  };

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
            name="username"
            placeholder="Search for a person..."
            className="flex-1 lg:p-3 p-2 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            onClick={() => {
              searchUser();
            }}
            className="bg-blue-800 text-white px-5 lg:py-3 py-2 rounded-xl hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* People List */}
        <div className="flex flex-col gap-5">
          {people.map((name, i) => (
            <div
              key={i}
              onClick={() => navigate(`/wallet/${name}`)}
              className="flex items-center justify-between bg-slate-100 p-5 rounded-xl shadow-md hover:shadow-lg transition w-full cursor-pointer"
            >
              {/* Left part - avatar and name */}
              <div className="flex items-center gap-4">
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
                  alt={name}
                  className="w-16 h-16 rounded-full"
                />
                <h3 className="text-lg font-medium text-gray-800">{name}</h3>
              </div>

              {/* Right part - send button */}
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
                Send
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wallet;
