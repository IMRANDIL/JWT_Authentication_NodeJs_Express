const express = require('express');
require('dotenv').config();

const app = express();

//MIDDLEWARE....

app.use(express.json());









const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})