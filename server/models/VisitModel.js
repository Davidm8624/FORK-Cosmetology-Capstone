const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: "Client" },
    preferredStylist: { type: Schema.Types.ObjectId, ref: "Stylist" },
    date: {
        type: Date
    },
    time: {
        type: Date
    },
    style: {
        type: String
    },
    notes: {
        type: String
    },
    duration:{
        // we calculate this by subtracting check out from check in 
    },
    checkIn: {
        type: Date
    },
    checkOut: { 
        type: Date
    },
    location: {
        type: String,
        default: 'ready',
        enum: ['ready', 'upcoming', 'active', 'completed']
    }
})

module.exports = mongoose.model("Visit", VisitSchema);
