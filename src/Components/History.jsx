import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  // {
  //   toWalletId: "Pritam",
  //   amount: "₹300.00",
  //   describtion: "Payment for services",
  // },
];

function History() {
  return (
    <div className="font-medium border border-black rounded-2xl m-5 md:m-10 p-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left font-bold">To</TableHead>
            <TableHead className="text-right font-bold">Amount</TableHead>
            <TableHead className="text-right font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transactions) => (
            <TableRow key={transactions.toWalletId}>
              <TableCell className="text-left">
                {transactions.toWalletId}
              </TableCell>
              <TableCell className="text-right">
                {transactions.amount}
              </TableCell>
              <TableCell className="text-right">
                {transactions.describtion}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default History;
