const express = require("express");
const app = express();
const PORT = 5000;

const routes = require("./routes/app.routes");

app.use("/", routes);

app.listen(PORT, () =>{
    console.log(`Backend running on vercel`);
})