const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  FirstName: {
    type: 'string',
    required: true,
  },
  LastName: { 
    type: 'string', 
    required:true
  },
  password:{
    type: 'string',
    required:true,
  }
});


// creating collection in MongoCompass -> name: userDetails //
const data = mongoose.model("userDetails", dataSchema);

module.exports = data;