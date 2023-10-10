require('dotenv').config();
const express = require('express');
const { sequelize } = require('./database/db.js');
const models = require('./models/models');

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.json());


const start = async () => {
    try
    {
        await sequelize.authenticate();  //
        await sequelize.sync();          // сверяем состояния бд с схемами данных
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (e)
    {
        console.log(e);
    }

}

start();
