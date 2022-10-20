const { Schema } = require("mongoose");


const moonSchema = new Schema({
    name: String,
    mostRecentDate: Date,
    futureDate: Date,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        }
    ],
    comments: [
        {
            createdAt: Date,
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            body: String
        }
    ],
    favoriters: [
        {
            user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }]
});

module.exports = model('Moon', moonSchema);