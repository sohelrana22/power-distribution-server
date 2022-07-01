const mongoose = require("mongoose")
const DB = `mongodb+srv://sohel:H9L5sPH0HjjrDE3y@cluster0.c9elrnk.mongodb.net/power?retryWrites=true&w=majority`
mongoose.connect(DB).then(() => {
    console.log("connection is successfully setup..")
}).catch((e)=>{
    console.log(e);
    console.log("connection is not build...");
});