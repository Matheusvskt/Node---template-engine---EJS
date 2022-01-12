const express = require('express');
const fs = require('fs')
const app = express();

let user = {
    id: 0,
    name: "Matheus vieira",
    phone: "(34)444-888-55",
}

function render(data, obj){
    for(let key in obj){
        data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data;
}
app.get("/", (req, res) => {
    fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
        if (!err) {
    
            res.send(render(data,user))
        }
    })
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`)
})