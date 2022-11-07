const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const topicsResolvers = require('./topics');
const commentsResolvers = require('./comments');


module.exports = {
    Query: {
        ...postsResolvers.Query,
        ...usersResolvers.Query,
        ...topicsResolvers.Query,
        ...commentsResolvers.Query

    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...topicsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
}