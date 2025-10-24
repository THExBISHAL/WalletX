import History from "@/Components/History";
import Navbar from "@/Components/Navbar";

function Transactions() {
  // useEffect(() => {
  //   let response = await API.userSignup(signupData);
  // console.log(response);
  // }, []);
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar />
      <History />
    </div>
  );
}

export default Transactions;
