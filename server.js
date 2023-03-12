const express = require('express');


const app = express();

const cors=require("cors")

const router = require('./routes/routes');
require('dotenv').config()
require('./models/db')

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    console.log("Reqiest", req.body);
    if (req.body != "")
    {
        res.send("Get Successfully")
        }
})
app.use('/api/task' , router)

app.listen(process.env.PORT , err => {
    if(err) console.log(err)
    console.log(`Server is started at PORT number :${process.env.PORT}`);
    console.log("Get connections",process.env.MONGO_URI);
})