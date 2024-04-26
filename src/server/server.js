import express from "express";
import config from './config/config.json' assert {type: 'json'}


const app = express();

const PORT = config.PORT.val;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get("/test", (req, res) => {
    console.log("Test successfull. Connection to server is possible.");
    res.send("Test called successfully");
});