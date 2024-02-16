import React, {useState}from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import TransactionValidation from "../validation/TransactionValidation";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Transaaction() {
  const navigate = useNavigate();
  const [ senderwalletid, setsenderwalletid] = useState();
  const [ receiverwalletid, setreceiverwalletid] = useState();
  const [ amount, setamount] = useState();
 
  const {
    // register,
    // handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(TransactionValidation) });

  // const onSubmit = handleSubmit(async(data) => {
  //   // alert(JSON.stringify(data));
  //   // await axios.post("wallet/add_wallet", data)
  //   const {status} = await axios.post("transfer/add_transfer", data)

  //   if(status == 200){
  //     navigate("/view")
  //   }
  // });

  const TransferSubmit = async () => {
    console.log(senderwalletid,receiverwalletid,amount)
  const {status} = await axios
        .post("transfer/add_transfer", {
            senderwalletid: senderwalletid,
            receiverwalletid: receiverwalletid,
            amount: amount,
        })
        .then((res) => {
            console.log(res.data);
            if (!senderwalletid || !receiverwalletid || !amount) {
                console.log("empty data inserted");
            }
            else {
                navigate("/view")
            }
        })
        .catch((error) => {
            console.log(error);
        });
        if(status == 200){
          alert(" Transfer Successfully :) ")
        }
};
  return (
    <>
      <Navbar />
      
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
          <h1>My Wallet</h1>
          {/* <Avatar sx={{ m: 1, bgcolor: "cyan" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Transaction
          </Typography>
          <Box>
          {/* <form onSubmit={onSubmit}> */}
          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Sender Wallet id"
              // name="senderwalletid"
              value={senderwalletid}
              onChange={(e) => setsenderwalletid(e.target.value)} 
              // {...register("senderwalletid")}
              
            />
            {errors.senderwalletid ? errors.senderwalletid.message : ""}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Receiver Wallet id"
              // name="receiverwalletid"
              // {...register("receiverwalletid")}
              value={receiverwalletid}
              onChange={(e) => setreceiverwalletid(e.target.value)}
              
            />
            {errors.receiverwalletid ? errors.receiverwalletid.message : ""}

            <TextField
              margin="normal"
              required
              fullWidth
              label="amount"
              // name="amount"
              // {...register("amount")}
              value={amount}
              onChange={(e) => setamount(e.target.value)}             
            />
            {errors.amount ? errors.amount.message : ""}

            <Button onClick={() => {
                    TransferSubmit()
                }} size="medium"> Submit </Button>        
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => {
                UserSubmit()
            }}
              sx={{ mt: 3, mb: 2 }}>
              Transfer Money
            </Button> */}
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}
