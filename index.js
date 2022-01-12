const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [{
        id: 0,
        name: "Matheus",
        phone: "(32)545454-5555"
    },
    {
        id: 1,
        name: "João",
        phone: "(32)545454-6666"
    },
    {
        id: 2,
        name: "Tog",
        phone: "(32)545455-85"
    },
]


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs"),

    app.get("/", (req, res) => {

        res.render('user.ejs', {users})

    })

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`)
})