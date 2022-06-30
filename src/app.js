const express = require("express");
const cors = require("cors");
require("./DBConnection/conn");
const user = require("./Routers/userRoute");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
//Insert data in user collection and getting from API and
app.use(express.json());
// 3: we need to register our router 
app.use(user);
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});

