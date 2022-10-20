const { model, Schema } = require('mongoose');

// graphql layer will say what is and isn't required
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    name: String,
    location: String,
    picture: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        }
    ],
    favoriteMoon: {
        type: Schema.Types.ObjectId,
        ref: 'moons'
    },
    playlists: [
        {
            type: Schema.Types.ObjectId,
            ref: 'playlists'
        }
    ],
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'events'
        }
    ]
})

module.exports = model('User', userSchema);