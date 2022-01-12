const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let user = {
    name:"Math Vieira",
    phone:"(23)4545454/5445"
}
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs"),

app.get("/", (req, res) => {

    res.render('user.ejs', user)

})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`)
})