import History from "@/Components/History";
import Navbar from "@/Components/Navbar";

function Transactions({userData}) {
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar userData={userData}/>
      <History />
    </div>
  );
}

export default Transactions;
