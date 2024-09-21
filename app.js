const express = require('express');
const app = express();

require('dotenv').config();
const bcrypt=require('bcryptjs');

const PORT=process.env.PORT || 4000;
let password = '123456'
const hashPassword = bcrypt.hash(password, 10);

app.use(express.json());

// require("./config/database").connect();

app.listen(PORT,()=>{
    console.log(`listening on port no : http://localhost:${PORT}`);
});

app.get('/',(req,res)=>{
    res.send(`<h1>This is HomePage yaar</h1>`);
})

app.get('/getdata',(req,res)=>{
    res.send({
        Name:'rohit kumar',
        Reg:'12201517'
    })
})