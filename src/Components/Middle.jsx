import { MdVerified } from "react-icons/md";

function Middle() {
  const cards = [
    { id: 1, color: "bg-blue-800", amount: "68,789.56" },
    { id: 2, color: "bg-white", amount: "14,729.25" },
    { id: 3, color: "bg-white", amount: "14,729.25" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => {
        const isWhite = card.color === "bg-white";
        return (
          <div
            key={card.id}
            className={`${card.color} ${
              isWhite ? "text-black" : "text-white"
            } rounded-2xl px-5 py-3 shadow-lg hover:scale-102 transition`}
          >
            <div
              className={`flex justify-between items-center mb-2 ${
                isWhite ? "text-blue-700" : "text-white"
              }`}
            >
              <MdVerified size={25} />
              <p className="text-md font-bold text-xl">CARD</p>
            </div>
            <p
              className={` ${
                isWhite ? "text-blue-600" : "text-white"
              } tracking-widest mb-3 text-lg font-medium`}
            >
              **** **** **** 1234
            </p>
            <p className="text-sm font-md opacity-80">Available Funds</p>
            <p className="text-xl font-bold">${card.amount}</p>

            <div
              className={`mt-3 text-sm flex justify-between ${
                isWhite ? "text-gray-600" : "text-gray-200"
              } font-medium`}
            >
              <span>Exp: 12/24</span>
              <span>CVV: 123</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Middle;
