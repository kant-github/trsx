"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendMoneyp2p() {
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    return (
        <div>
            <Card title="Send Money">
                <TextInput label={"Amount in INR"} placeholder={"Amount"} setInput={setAmount} />
                <TextInput label={"Enter Phone No %"} placeholder={"Mobile No"} setInput={setNumber} />
                <div className="flex justify-center pt-4">
                    <Button onClick={async () => {
                        await p2pTransfer(number, Number(amount)*100)
                    }}>Send</Button>
                </div>
            </Card>
        </div>
    )
} 

