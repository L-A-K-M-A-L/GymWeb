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
    height : {
        type: String,
        required: true
    },
    weight : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("MemberData", memberSchema);