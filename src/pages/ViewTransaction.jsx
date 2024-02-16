import React from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import axios from "axios";

// const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: zodResolver(TransactionValidation) });

// const OnSubmit = handleSubmit(async(data) =>{
    
// })

  function createData( date, senderWalletId, receiverWalletId ,amount) {
  return { date, senderWalletId, receiverWalletId, amount };
}

const rows = []

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <h1 align="center">Anas Wallet</h1> <br></br>
      <h1 align="center">View Transaction</h1> 
      <br></br>
      <br></br>
      <hr></hr>
    <React.Fragment>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Sender Wallet I'D</TableCell>
            <TableCell>Receiver Wallet I'D</TableCell>
            <TableCell align="right"> Amount </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.senderWalletId}</TableCell>
              <TableCell>{row.receiverWalletId}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
    </>
);
}

