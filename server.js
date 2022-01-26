const express = require('express');
require('dotenv').config();

const app = express();
const router = require('./router/router')
//MIDDLEWARE....

app.use(express.json());

app.use('/', router);







const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})