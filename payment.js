
const express = require("express")
const stripe = require("stripe")("sk_test_51J12GCE9ORF0ZMb0vxnIJyLqn1ey3JKp7cChwt81RT4CtFKywIsNyr80gmQfrqvS5IQCbFtfpnmOQqPBPQJ8b27000vlNNmcA1")
const cors = require("cors")
const uuid=require("uuid")
const app = express()

app.use(require("body-parser").urlencoded({ extended: true }))
app.use(require("body-parser").json())

app.use(cors())

app.get("/",(res,req)=>{
    res.send("ITS WORKING")
})

app.post("/payment", cors(), async (req, res) => {
    debugger
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})