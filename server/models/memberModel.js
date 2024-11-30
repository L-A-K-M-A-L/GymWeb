const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    membership : {
        type: String,
    },
    phone : {
        type: String,
        required: true
    },
    age : {
        type: String,
        required: true
    },
    planActivateDate : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("MemberData", memberSchema);