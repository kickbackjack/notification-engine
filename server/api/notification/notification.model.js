'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var NotificationSchema = new mongoose.Schema({
  title: String,
  description: String,
  actions: [{ 
  	title: String,
  	description: String,
  	selected: { type: Boolean, default: false },
  	selectedDate: Date
  }],
  date: { type: Date, default: Date.now },
  acknowledged: { type: Boolean, default: false }
});

export default mongoose.model('Notification', NotificationSchema);
