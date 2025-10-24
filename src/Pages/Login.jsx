import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "@/Service/api";
import { DataContext } from "@/context/DataProvider";
import { toast } from "sonner";

function Login({ setIsAuthenticated }) {
  const initialState = {
    name: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialState);
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(loginData);

    if (response?.isSuccess) {
      sessionStorage.setItem("accessToken", `Bearer ${response.data.token}`);
      setAccount({
        userId: response.data.userid,
      });
      setIsAuthenticated(true);
      toast(response.data.message);
      navigate("/");
    } else {
      toast("Invalid credentials. Try again!");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-violet-950">
        <div className="flex shadow-2xl rounded-lg overflow-hidden w-full mx-10 sm:mx-20 bg-gradient-to-br from-gray-800 to-violet-700 p-5">
          {/* Left Panel (Image + Branding) */}
          <div className="hidden lg:flex flex-1 rounded-lg bg-violet-900 flex-col justify-evenly p-6">
            <div className="flex justify-start items-center space-x-2">
              <span className="text-slate-100 text-3xl font-serif font-semibold">
                WalletX
              </span>
            </div>
            <div className="flex-grow flex flex-col justify-end mt-2">
              <img
                src="https://wpblogassets.paytm.com/paytmblog/uploads/2022/03/HowTo_8_Transfer-money-from-Paytm-Wallet-to-Bank-Account.jpg"
                alt="Desert"
                className="object-cover w-full h-80 rounded-xl"
              />
              <span className="mt-4 text-slate-100 text-lg font-sarif">
                Pay Smarter,
                <br />
                Live Better
              </span>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="flex-1 flex flex-col justify-center md:px-6 ">
            <div className="h-full py-6 flex flex-col justify-between lg:gap-0 gap-12 ">
              <div className="">
                <h2 className="text-slate-100 text-2xl sm:text-3xl font-bold mb-2 font-sans">
                  Login
                </h2>
                <span className="text-gray-400 text-sm">
                  Don't have an account?{" "}
                  <a href="/register" className="underline hover:text-blue-600">
                    Sign up
                  </a>
                </span>
              </div>
              <div className="mb-10">
                <form className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col gap-8 mb-12">
                    <input
                      onChange={(e) => {
                        onValueChange(e);
                      }}
                      required
                      name="name"
                      type="text"
                      placeholder="Username"
                      className="flex-1 px-4 py-2 rounded bg-violet-950 text-white"
                    />
                    <input
                      onChange={(e) => {
                        onValueChange(e);
                      }}
                      required
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="px-4 py-2 rounded bg-violet-950 text-white mb-2"
                    />
                  </div>
                </form>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    onClick={() => {
                      loginUser();
                    }}
                    className="mx-auto w-70 h-12 py-2 rounded-xl bg-violet-950 text-gray-300 font-semibold mb-4 hover:scale-102 duration-200"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
