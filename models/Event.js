const { Schema } = require("mongoose");


const eventSchema = new Schema({
    title: String,
    moon: {
        type: Schema.Types.ObjectId,
        ref: 'moons'
    },
    description: String,
    leader: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    attendees: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    date: Date,
    location: String
});

module.exports = model('Event', eventSchema)