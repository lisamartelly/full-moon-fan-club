const { UserInputError, AuthenticationError } = require('apollo-server')

const Topic = require('../../models/Topic')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Mutation: {
        createComment: async (_, { topicId, body }, context ) => {
            const {username} = checkAuth(context);

            if(body.trim() === ''){
                throw new UserInputError('Empty comment',  {
                    errors: {
                        body: 'Comment body must not be empty'
                    }
                });
            }

            const topic = await Topic.findById(topicId);

            if(topic){
                topic.comments.push({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await topic.save();
                return topic;
            } else throw new UserInputError('Topic not found');
        },
        async deleteComment(_, { topicId, commentId }, context) {
            const { username } = checkAuth(context);

            const topic = await Topic.findById(topicId);

            if (topic) {
                const commentIndex = topic.comments.findIndex((c) => c.id === commentId);

                if (topic.comments[commentIndex].username === username) {
                    topic.comments.splice(commentIndex, 1);
                    await topic.save();
                    return topic;
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } else {
                throw new UserInputError('Post not found');
            }
        }

    }
}