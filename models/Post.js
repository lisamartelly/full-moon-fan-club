const { model, Schema } = require('mongoose');


const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    moon: String,
    picture: String
});

module.exports = model('Post', postSchema);