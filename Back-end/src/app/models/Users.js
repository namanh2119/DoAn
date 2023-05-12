const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    avatar: String,
    account:  String,
    password:  String,
    phone:  String,
    address: String,
    permission:  String
},
{
    timestamps: true,
  },
)

module.exports = mongoose.model('User', User);