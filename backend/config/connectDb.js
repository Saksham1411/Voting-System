const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url).then(console.log('connected'))
}

module.exports = connectDB