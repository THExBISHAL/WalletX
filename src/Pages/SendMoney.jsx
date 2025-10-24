import Navbar from "@/Components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

function SendMoney() {
  const { name } = useParams();
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
    { type: "sent", amount: 200 },
    { type: "received", amount: 500 },
    { type: "sent", amount: 100 },
  ]);
  const [pass, setPass] = useState("");

  const onValueChange = (e) => {
    setPass(e.target.value);
  };

  const chatEndRef = useRef(null);

  const handleSend = () => {
    console.log(amount);
    if (!amount) return;
    setTransactions([
      ...transactions,
      { type: "sent", amount: parseInt(amount) },
    ]);
    setAmount("");
  };

  // Auto-scroll to latest transaction
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transactions]);

  return (
    <div className="min-h-screen bg-violet-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Top Header */}
      <div className="bg-gray-500 text-white p-4 flex items-center shadow-md sticky top-0 z-10">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3">
          <img
            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
            alt={name}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>

      {/* Middle - Chat / Transaction History */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {transactions.map((tx, idx) => (
          <div
            key={idx}
            className={`flex ${
              tx.type === "sent" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-white ${
                tx.type === "sent" ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              ₹{tx.amount}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Bottom - Send Money Input */}
      <div className="p-4 bg-white flex items-center gap-3 shadow-inner sticky bottom-0 z-10">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-green-500 text-white px-5 py-6 rounded-2xl hover:bg-green-600"
              >
                Send
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-100 text-black">
              <DialogHeader>
                <DialogTitle>Enter Password</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Input
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    id="name"
                    name="name"
                    placeholder="Enter password to send money"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="border border-black"
                  onClick={handleSend}
                >
                  Send
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
}

export default SendMoney;
