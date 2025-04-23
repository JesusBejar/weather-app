const express = require("express")
const server = express()
const port = 3000

// normal function, no arrows.....yet
server.get("/hello", function (req, res) {
    res.send("Hello World!")
})

server.listen(port, function () {
    console.log(`Server is running on port ${port}!`)
})
