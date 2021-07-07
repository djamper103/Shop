
import { createServer } from "miragejs"

let json = require('./db.json');


const stripe = require("stripe")("sk_test_51J12GCE9ORF0ZMb0vxnIJyLqn1ey3JKp7cChwt81RT4CtFKywIsNyr80gmQfrqvS5IQCbFtfpnmOQqPBPQJ8b27000vlNNmcA1");
const { uuidv4 } = require('uuid')
const cors = require("cors");


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

    this.post("/payment", (req, res) => {
    
      let error;
      let status;
      try {
        const { token, cart, priceCount } = JSON.parse(res.requestBody)
        debugger
        const customer =stripe.customers.create({
          email: token.email,
          source: token.id
        });
    debugger
        const idempotency_key = uuidv4;
        const charge =stripe.charges.create(
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

    this.passthrough('https://checkout.stripe.com/**');
    this.passthrough('http://checkout.stripe.com/**');
    this.passthrough('http://www.gstatic.com/firebasejs/**');
  },
  
})