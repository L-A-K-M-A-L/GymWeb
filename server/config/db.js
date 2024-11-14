const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Mongo DB connected Successfuly....");
    }).catch((err)=>{
        console.log(`Mongo DB connection Failed...${err}`)
    })
}