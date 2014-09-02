/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var nodemailer = require('nodemailer');

module.exports = {

  attributes: {

    user: {
    	type: 'string',
      required: true,
      minLength: 5,    // Validations
      maxLength: 25
    },
    
    password: 'STRING',
    
    userSize: function() {
    	return user.length
    }

  },

  afterCreate: function(v, cb) {

    console.log('sending ', v.user)

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: sails.config.mail_cfg.user,
        pass: sails.config.mail_cfg.pass
      }
    });

    var mailOptions = {
      from: 'Bot <bot@boop.com>',
      to: 'd.erich@hotmail.com',
      subject: 'New user registered ✔', 
      text: 'User ' + v.user + ' just registered', 
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if(error) console.log(error);

      else {
        console.log('Message sent: ' + info.response)
        cb()
      }
    });
  }

};