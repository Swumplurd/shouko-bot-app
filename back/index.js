require('dotenv').config();
const cors = require('cors');
const express = require('express');
const dbConnection = require('./database/config');

const app = express();

dbConnection();

app.use(cors())
app.use(express.json());

app.use('/api/user', require('./routes/user'));

app.listen(process.env.PORT, () => {
    console.log(`App listening on http://localhost:${process.env.PORT}`)
})