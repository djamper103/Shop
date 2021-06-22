const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51J12GCE9ORF0ZMb0vxnIJyLqn1ey3JKp7cChwt81RT4CtFKywIsNyr80gmQfrqvS5IQCbFtfpnmOQqPBPQJ8b27000vlNNmcA1");
const { uuidv4 } = require('uuid')

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/payment", cors(), async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { token, cart, priceCount } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuidv4;
    const charge = await stripe.charges.create(
      {
        amount: priceCount,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${cart}`,
        metadata: {
          "order_id": `Purchased the ${cart}`
        },
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(4000);
