const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    firstName : {
        type: String,
        required : true
    },
    lastName : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    password :{
        type: String,
        required : true
    }
});


module.exports = moongose.model("UserData", userSchema);