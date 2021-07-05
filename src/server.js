import { createServer } from "miragejs"

let json = require('./db.json');

createServer({

  routes() {
    this.post("/api/server/shopItem", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItem.slice(start, end)
      return {data:main}
    })


    this.post("/api/server/man", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItemMan.slice(start, end)
      return {data:main}
    })

    this.post("/api/server/woman", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItemWoman.slice(start, end)
      return {data:main}
    })


    this.post("/api/server/shoes", (schema, item) => {
      let { limit, currentPage } = JSON.parse(item.requestBody)
      let start = currentPage > 1 ? (currentPage - 1) * limit : 0
      let end = currentPage * limit
      let main = json.shopItemShoes.slice(start, end)
      return {data:main}
    })

    this.get("/api/server/shopItemAll", () => ({

      data:json.shopItem
    }))

    this.get("/api/server/sale", () => ({

      data:json.shopItemSale
    }))
  },
})