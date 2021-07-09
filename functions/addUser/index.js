const connectToDatabase = require('../db/index');
const User = require('../models/User');






const userCreate =  (data) => {
 
  connectToDatabase()
    try{
    let newUser = new User(JSON.parse(data.body));
    newUser.save()
    return { statusCode: 200, body: JSON.stringify('User added!')}
    
  }
    catch (err) { return{ statusCode: 400, body: JSON.stringify('Error: ' + err)}};
    
    

};



module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  return userCreate(event)
   
}
