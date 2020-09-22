const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('DB connected'));

const connectDB = async ({ user, password, name }) => {
  const uri = `mongodb+srv://${user}:${password}@cluster0.jwttz.mongodb.net/${name}?retryWrites=true&w=majority`
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDB;