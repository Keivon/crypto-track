const connectToDatabase = require('../db/index');
const User = require('../models/User');


const updateUser = async (username, cards, value) => {

    connectToDatabase()

    try {

        const existingUser = await User.findOneAndUpdate(
            { username: `${username}` },
            { cards, value },
            { new: true });
        return { statusCode: 200, body: JSON.stringify(existingUser) }
    } catch (err) {
        return { statusCode: 400, body: JSON.stringify(`User can't be found`) }
    }
}

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    if (event.httpMethod !== "PUT") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    const { username, cards, value } = JSON.parse(event.body);
    return await updateUser(username, cards, value);



}