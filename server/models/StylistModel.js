const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StylistSchema = new Schema({
  clients: { type: Schema.Types.ObjectId, ref: "Client" },
  teacher: { type: Schema.Types.ObjectId, ref: "Stylist" },
  email: {
    type: String,
    unique: true,
    required: true,
    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  },
  pin: {
      type: String,
      pattern: /^\d{4}$/
    //! THIS PATTERN HASN'T BEEN DOUBLE CHECKED YET!!!!!
  },
  profilePicURL: {type: String},
    newMsgPopup: {
        type: Boolean,
        default: true
    },
//* tracking hours per semester
  s1hours:{
      type: Number
  },
  s2hours: {
      type: Number
  },
  s3hours: {
      type: Number
  },
  s4hours: {
      type: Number
  }
 

});

module.exports = mongoose.model("Stylist", StylistSchema);
