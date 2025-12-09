import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { API } from "@/Service/api";
import { DataContext } from "@/context/DataProvider";

function Top() {
  const initialValue = {
    balance: "",
    id: "",
    isActive: false,
    userId: "",
  };

  const [data, setData] = useState([{ data: [] }]); //NEWS data
  const [add, setAdd] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [wallet, setWallet] = useState(initialValue);
  const { account } = useContext(DataContext);

  const addMoneyURL = `/wallets/${account.userId}/credit`;
  const maskWalletId = (id) => {
    if (!id) return "";
    const strId = id.toString();
    const masked = "*".repeat(strId.length - 5) + strId.slice(-5);
    return masked.replace(/(.{7})/g, "$1 ");
  };

  useEffect(() => {
    const createWallet = async () => {
      const response = await API.createWallet({ userId: account.userId });
      if (response?.isSuccess) {
        setWallet(response.data);
        setBalance(response.data.balance);
        setIsDialogOpen(false);
      }
    };
    createWallet();
  }, []);

  const addMoney = async (e) => {
    try {
      const response = await API.addMoney(
        { amount: add },
        null,
        null,
        addMoneyURL
      );
      console.log(response.data);

      if (response?.isSuccess) {
        setBalance((prev) => prev + add);
      } else {
        console.log("Failed:", response);
      }
    } catch (err) {
      console.error("Error adding money:", err);
    }
  };

  //Fetch News
  useEffect(() => {
    fetch(
      "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=CbjKrsPKDISKrngXHVHBulJWl3JgERlLeqEbdIml"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* NEWS */}
      <div className="relative rounded-2xl shadow overflow-hidden">
        <img
          src={data.data?.[0]?.image_url}
          alt="Loading"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-5 text-white gap-5">
          <h3 className="font-semibold text-xl">News</h3>
          <p className="text-md mt-3">
            {data.data?.[0]?.title || "Loading latest news..."}
          </p>
        </div>
      </div>

      {/* Main Wallet */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow p-5 flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl  text-gray-800">Wallet</h3>
          <p className="text-md font-medium mt-2">{maskWalletId(wallet.id)}</p>
          <p className="text-2xl lg:text-2xl font-bold mt-1">₹{balance}</p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className=" mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:scale-102 transition-transform duration-100 ease-in-out"
                >
                  Add money
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>Add money</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Input
                      type="Number"
                      name="addMoney"
                      placeholder="Enter amount to add"
                      onChange={(e) => setAdd(parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      onClick={async () => {
                        await addMoney();
                        setIsDialogOpen(false); // manually close dialog
                      }}
                    >
                      Add
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
        <div className="text-right flex flex-col justify-start">
          <h3 className="font-bold text-xl  text-gray-800">Today</h3>
          <p className="text-gray-600 font-medium pt-5">
            Deposit: <span className="font-bold text-green-600">₹3,256.29</span>
          </p>
          <p className="font-medium text-gray-600 pt-2">
            Expense: <span className="font-bold text-red-500">₹1,538.25</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Top;
