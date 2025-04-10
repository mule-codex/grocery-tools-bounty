import express, { Response, Request } from "express"
const app = express()
import adminRoutes from "./routes/admin.routes.js"
import sequelize from "./config/db.js"
//import routes
app.use("/admin", adminRoutes)
//database snyc
async function main() {
  try {
    await sequelize.sync()
    app.listen(3000, () => {
      console.log("app running at localhost port 3000")
    })
  } catch (err) {
    console.log(err)
  }
}
main()
