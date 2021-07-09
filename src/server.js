import { createServer } from "miragejs"
import { v4 as uuidv4 } from 'uuid';

let json = require('./db.json');


const stripe = require("stripe")("sk_test_51J12GCE9ORF0ZMb0vxnIJyLqn1ey3JKp7cChwt81RT4CtFKywIsNyr80gmQfrqvS5IQCbFtfpnmOQqPBPQJ8b27000vlNNmcA1");

// const cors = require("cors");
// app.use(cors());

createServer({

  routes() {

    this.namespace='api'
    this.post("/shopItem", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItem.slice(start, end)
      return {data:main}
    })


    this.post("/man", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItemMan.slice(start, end)
      return {data:main}
    })

    this.post("/woman", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItemWoman.slice(start, end)
      return {data:main}
    })


    this.post("/shoes", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItemShoes.slice(start, end)
      return {data:main}
    })

    this.get("/shopItemAll", () => ({

      data:json.shopItem
    }))

    this.get("/sale", () => ({

      data:json.shopItemSale
    }))


   
    this.post("/payment", async (req, res) => {
      debugger
    
      let error;
      let status;
      try {
        const { token, cart, priceCount } = JSON.parse(res.requestBody)
        const idempotency_key = uuidv4();
        const customer = await stripe.customers.create({
          email: token.email,
          source: token.id
        }).then(
          stripe.charges.create(
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
            })
          )
        console.log("Charge:");
        status = "success";
      } catch (error) {
        console.error("Error:", error);
        status = "failure";
      }
    
      res.json({ error, status });
    });
    

    this.passthrough('http://localhost:4000/**');
    this.passthrough('https://www.gstatic.com/**');
    this.passthrough('https://api.stripe.com/**');
    this.passthrough('http://checkout.stripe.com/**');
    this.passthrough('https://checkout.stripe.com/**');
    this.passthrough('/v1/charges/ch_1JASHWE9ORF0ZMb0lCzneoFm/refunds');
    this.passthrough('https://pay.stripe.com/**');
    this.passthrough('https://www.gstatic.com/firebasejs/**');
    this.passthrough('shopper-b192d.firebaseapp.com');
    this.passthrough('shopper-b192d.web.app');

  },
  
})