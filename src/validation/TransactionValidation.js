import {z} from "zod";

const TransactionValidation = z.object({
    senderwalletid: z.string(),
    receiverwalletid: z.string(),
    amount: z.string(),
});

export default TransactionValidation;