const mongoose = require('mongoose');
const MONGODB_URI = process.env.DB;


mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true ,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};

