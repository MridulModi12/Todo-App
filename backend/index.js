const express = require(express)
const app = express()

app.use(express.json())

app.post("/addTodo") 

app.get("/getTodo")

app.put("updateTodo")


app.listen(3000)