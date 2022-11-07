const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config')

module.exports = (context) => {
    // const will have an object incl many things including headers
    const authHeader = context.req.headers.authorization
    if(authHeader){
        const token = authHeader.split('Bearer ')[1];
        console.log(token);

        if(token){
            try{
                const user = jwt.verify(token, SECRET_KEY)
                return user;
            } catch(err){
                throw err;
                throw new AuthenticationError('Invalid/Expired token')
            }
        }
        throw new Error('Authentication token must be \'Bearer [token]')
    }
    throw new Error('Authorization header must be provided')

}