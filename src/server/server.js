import express from "express";
import config from './config/config.json' assert {type: 'json'}

const app = express();
const PORT = config.PORT.val;


app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});