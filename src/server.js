import { createServer } from "miragejs";

let json = require("./db.json");

createServer({
  routes() {
    this.namespace = "api";

    this.post("/shopItem", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody);
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0;
      let end = currentPage * limit;
      let main = json.shopItem.slice(start, end);
      return { data: main };
    });

    this.post("/man", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody);
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0;
      let end = currentPage * limit;
      let main = json.shopItemMan.slice(start, end);
      return { data: main };
    });

    this.post("/woman", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody);
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0;
      let end = currentPage * limit;
      let main = json.shopItemWoman.slice(start, end);
      return { data: main };
    });

    this.post("/shoes", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody);
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0;
      let end = currentPage * limit;
      let main = json.shopItemShoes.slice(start, end);
      return { data: main };
    });

    this.get("/shopItemAll", () => ({
      data: json.shopItem,
    }));

    this.get("/sale", () => ({
      data: json.shopItemSale,
    }));

    this.passthrough("http://localhost:4000/**");
    this.passthrough("https://www.gstatic.com/**");
    this.passthrough("https://api.stripe.com/v1/tokens");
    this.passthrough("http://checkout.stripe.com/**");
    this.passthrough("https://pay.stripe.com/**");
    this.passthrough("https://www.googleapis.com/identitytoolkit/**");
    this.passthrough("chrome-extension://");
    this.passthrough("https://q.stripe.com/**");
  },
});
