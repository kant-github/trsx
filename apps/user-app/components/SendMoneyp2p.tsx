"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { toast } from "sonner";

export function SendMoneyp2p() {
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    const [paymentOnLoad, setPaymentOnLoad] = useState(false);
    const [paymentDisplay, setPaymentDisplay] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "completed">("idle");


    const handlePayment = async () => {
        setPaymentStatus("processing");
        try {
            toast.info("Payment initiated");
            await p2pTransfer(number, Number(amount) * 100);
            toast.success("Payment completed");
            setPaymentStatus("completed");
        } catch (error) {
            setPaymentStatus("idle");
            console.error("Payment failed", error);
        }
    }

    return (
        <div>
            <Card title="Send Money">
                <TextInput label={"Amount in INR"} placeholder={"Amount"} setInput={setAmount} />
                <TextInput label={"Enter Phone No %"} placeholder={"Mobile No"} setInput={setNumber} />
                <div className="flex justify-center pt-4">
                    <Button onClick={handlePayment}>Send</Button>
                </div>
            </Card>
            <div>
                {paymentStatus !== "idle" && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-[#ffffff] text-[#ffffff] p-6 rounded-lg shadow-lg text-center">
                            {paymentStatus === "processing" && (
                                <div>
                                    <div>

                                    </div>
                                </div>
                            )}
                            {paymentStatus === "completed" && (
                                <div className="flex flex-col gap-3">
                                    <div className="text-[#27292e] text-3xl">Payment Success</div>
                                    <p className="text-[#27292e] text-xl">Your payment has been successfully done.</p>

                                </div>
                            )}
                            {paymentStatus === "completed" && (
                                <Button onClick={() => setPaymentStatus("idle")}>Close</Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

