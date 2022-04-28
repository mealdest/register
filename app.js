/* Packages */
const http = require('http');
const mongoose = require("mongoose");
const express = require('express');
const app = express();

/* Routings */
const accountRoutes = require('./routes/account.routes');

let port = '3000';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/account', accountRoutes);

(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/shop_db');
        console.log('Successfully Mongoose Connected....');
    } catch (error) {
        console.error(error);
        handleError(error);
    }
})();

let server = http.createServer(app);



server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});