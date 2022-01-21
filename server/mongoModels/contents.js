var mongoose = require('mongoose');

const Content = mongoose.model('Content', {
  title: String,
  content: String
});

module.exports = Content;
