const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({  
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
  cards: {type: String, required: true},
  value: {type: Number, required: true },
}, {
    timestamps: true,
  });
module.exports = mongoose.model('User', UserSchema);