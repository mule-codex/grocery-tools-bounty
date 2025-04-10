import express, { Response, Request } from "express"
const app = express()
import adminRoutes from "./routes/admin.routes.js"
//import routes
app.use("/admin", adminRoutes)


app.listen(3000, () => {
  console.log("app running at localhost port 3000")
})
