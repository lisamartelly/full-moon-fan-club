const gql = require('graphql-tag'); 


module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Topic{
        id: ID!
        title: String!
        body: String!
        createdAt: String!
        username: String!
        moon: String!
        comments: [Comment]!
    }
    type Comment{
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getPosts: [Post]
        getPost(postId: ID!): Post
        getTopics: [Topic]
        getTopic(topicId: ID!): Topic
        getComments:[Comment]
        getUsers: [User]
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createTopic(title: String!, body: String!, moon: String!): Topic!
        deleteTopic(topicId: ID!): String!
        createComment(topicId: String!, body:String!): Topic!
        deleteComment(topicId: String!, commentId: ID!): Topic!
    }
`