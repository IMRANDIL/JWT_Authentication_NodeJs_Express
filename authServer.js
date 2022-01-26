const express = require('express');
require('dotenv').config();

const app = express();
const router = require('./router/router2')
//MIDDLEWARE....

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router);







const PORT = process.env.PORT2 || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})