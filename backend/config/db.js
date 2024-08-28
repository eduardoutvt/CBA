const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://evalenciasalazar274:YHImFiLpukNrwT1M@appcba.pnmoaq1.mongodb.net/AppCBA?retryWrites=true&w=majority&appName=AppCBA';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
