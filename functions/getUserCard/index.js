const connectToDatabase = require('../db/index');
const User = require('../models/User');


const getUser = async (username) => {
    
    connectToDatabase()
try {
    const existingUser =  await User.findOne({ username:`${username}` });
    return { statusCode: 200, body: JSON.stringify(existingUser)}
} catch (err) {
    return { statusCode: 400, body: JSON.stringify(`User can't be found`)}
}
}

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
   
    if (event.httpMethod !== "GET") {
        return { statusCode: 405, body: "Method Not Allowed" };
      }

    const { username } = event.queryStringParameters;

    return await getUser(username);
}