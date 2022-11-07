const { model, Schema } = require('mongoose');


const topicSchema = new Schema({
    title: String,
    body: String,
    username: String,
    createdAt: String,
    moon: String,
    comments : [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ]
});

module.exports = model('Topic', topicSchema);