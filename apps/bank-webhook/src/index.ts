import express from "express"
import db from "@repo/db/client"

const app = express();
app.use(express.json())

interface paymentInformationProps {
    token: string,
    userId: string,
    amount: number
}

app.post("/webHook", async(req, res) => {

    const paymentInformation: paymentInformationProps = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: Number(req.body.amount) * 100
    }

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success",
                }
            })
        ]);
        res.json({
            message: "Captured"
        })
    } catch(err) {

        console.error(err);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})


app.listen(3003, () => {
    console.log("App is listwning at port 3003")
})