import express from "express";

let app = express()
app.get("/", (req, res) => {
  res.send("test")
})
app.listen(8000, () => {
  console.log("app running")
})
