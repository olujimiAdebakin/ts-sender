"use client"

import { useState } from "react";
import { InputForm } from "./InputField";


export default function AirdropFrom() {
    const [tokenAddress, setTokenAddress] = useState("");
    const [recipients, setRecipients] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async () => {
        console.log("Token Address:", tokenAddress);
        console.log("Recipients:", recipients);
        console.log("Amount:", amount);
    }

    return (
      <>
        <InputForm
          label="Token Address"
          placeholder="0x6f8c...e3d"
          value={tokenAddress}
          type="number"
          onChange={(e) => setTokenAddress(e.target.value)}
        />
        <InputForm
          label="Recipients Address"
          placeholder="0x6f8c...e3d"
          value={recipients}
          type="number"
          onChange={(e) => setRecipients(e.target.value)}
          large={true}
        />
        <InputForm
          label="Amount"
          placeholder="100, 200, 300"
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          large={true}
        />
        <button onClick={handleSubmit}>Send Tokens</button>
      </>
    );
}