'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { 
    type: String,
    default: 'No title',
    trim: true,
    minlength: 1
  },
  content: { 
    type: String, 
    trim: true,
    minlength: 1
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model('Post', PostSchema);