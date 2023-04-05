const express = require('express');

const path = require('path');
const app = express();



app.use("/",express.static('view'))

app.get('/api',(req,res) => {
    console.log(path.join(__dirname, './View/index.html'))
res.render(path.join(__dirname, './View/index.html'))


})


app.listen(8080)



