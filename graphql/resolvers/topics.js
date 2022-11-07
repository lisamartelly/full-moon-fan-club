const { AuthenticationError } = require('apollo-server');

const Topic = require('../../models/Topic');
const checkAuth = require('../../util/check-auth')

module.exports = {
    Query: {
        async getTopics(){
            try{
                const topics = await Topic.find().sort({createdAt: -1});
                return topics;
            } catch(err){
                throw new Error(err);
            }
        },
        async getTopic( _, { topicId }) {
            try{
                const topic = await Topic.findById(topicId);
                if(topic){
                    return topic;
                }
                else {
                    throw new Error('Topic not found')
                }
            } catch(err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async createTopic(_, { body }, context){
            const user = checkAuth(context);
            console.log(user)

            // henceforth after checks this means there is a valid user
            const newTopic = new Topic({
                body,
                user: user.indexOf,
                username: user.username,
                createdAt: new Date().toISOString()
            }
            )

            const topic = await newTopic.save();

            return topic;

        },
        async deleteTopic(_, { topicId }, context){
            const user = checkAuth(context);

            try{
                const topic = await Topic.findById(topicId)
                if(user.username === topic.username){
                    await topic.delete();
                    return 'Topic deleted successfully'
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } catch(err){
                throw new Error(err);;
            }
        }
    }
}