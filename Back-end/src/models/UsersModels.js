const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    avatar: { type: String, required: [true, 'Add a food avatar']},
    account:  { type: String, required: [true, 'Add a food account']},
    password:  { type: String, required: [true, 'Add a food password']},
    phone:  { type: String, required: [true, 'Add a food phone']},
    email:  { type: String, required: [true, 'Add a food email']},
    address: { type: String, required: [true, 'Add a food address']},
    isAdmin:  { type: Boolean, default: false}
},
{
    timestamps: true,
  },
)

module.exports = mongoose.model('User', User);