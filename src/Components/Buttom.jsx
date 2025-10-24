import { FaArrowRight } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

function Bottom() {
  const transactions = [
    {
      title: "Fashion",
      type: "expense",
      amount: "-15.00",
      category: "Clothes",
    },
    { title: "Food", type: "expense", amount: "-8.00", category: "Food" },
    {
      title: "Business",
      type: "income",
      amount: "+249.69",
      category: "Transfer",
    },

    {
      title: "Pharmacy",
      type: "expense",
      amount: "-38.50",
      category: "Card Payment",
    },
  ];

  const income = 44153.2;
  const expense = 29158.8;
  const total = income + expense;

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#2563eb", "#f97316"];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Cashflow */}
      <div className="flex flex-col justify-start bg-white rounded-2xl p-3 lg:px-8 h-80 lg:h-65">
        <h3 className="font-bold pl-10 lg:pl-5 text-gray-700">Cashflow</h3>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <div className=" flex lg:flex-col items-center lg:justify-between justify-evenly gap-10 px-10 py-5">
              <div className="flex items-center text-blue-600">
                <ArrowDown size={18} />
                <div>
                  <p className="text-lg font-semibold">
                    {income.toLocaleString()} $
                  </p>
                  <p className="text-xs text-gray-500">Income</p>
                </div>
              </div>

              <div className="flex items-center w-25 text-orange-500">
                <ArrowUp size={18} />
                <div>
                  <p className="text-lg font-semibold">
                    {expense.toLocaleString()} $
                  </p>
                  <p className="text-xs text-gray-500">Expense</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex lg:flex-row flex-col justify-between lg:justify-end-safe  w-full lg:gap-5">
            <div className="flex lg:justify-between justify-end-safe">
              <Select>
                <SelectTrigger className="w-30">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Today</SelectItem>
                  <SelectItem value="dark">Last week</SelectItem>
                  <SelectItem value="system">Last month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between lg:pt-9">
              {/* Donut Chart */}
              <div className="relative w-40 h-40">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius={55}
                      outerRadius={70}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-sm font-medium text-gray-800">
                    Total Cashflow
                  </p>
                  <p className="text-xl font-bold">${total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Transactions */}
      <div className="bg-white shadow rounded-2xl p-8">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-700 mb-4">Latest Transactions</h3>
          <Link to="/history">
            <FaArrowRight size={24} />
          </Link>
        </div>

        <ul className="space-y-2 text-sm">
          {transactions.map((t, index) => (
            <li key={index} className="flex justify-between">
              <span>{t.title}</span>
              <span
                className={`font-semibold ${
                  t.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {t.amount}$
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Bottom;
