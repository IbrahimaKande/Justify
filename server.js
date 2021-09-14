const express = require("express")
let routes = require("./routes/user.routes")

const app = express()

const db = require("./model")
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync database")
})

app.use(express.json())

app.get("/", (req,res) => {
    res.json({ message: "Welcome to *JUSTIFY*"})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/', routes)