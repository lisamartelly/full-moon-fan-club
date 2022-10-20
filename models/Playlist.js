const { model, Schema } = require("mongoose");


const playlistSchema = new Schema({
    url: String,
    moon: {
        type: Schema.Types.ObjectId,
        ref: 'moons'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Playlist', playlistSchema);