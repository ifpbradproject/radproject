/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	index: function(req, res) {
    if (!req.session.user)
      res.view();
    else
      res.redirect('/dashboard') ;
	},

  favicon: function(req, res) {
    res.end()
  },

	login: function(req, res) {

    var user = req.param("user");
    var password = req.param("password");

    Users.findOneByUser(user, function(err, usr) {
      if (err) {
        res.send(500, { error: "DB Error" });
      } else {
        if (usr) {
          var hasher = require("password-hash");
          if (hasher.verify(password, usr.password)) {
            req.session.authenticated = true;
            req.session.user = usr;
            res.redirect('dashboard');
          } else {
            req.flash('wrongPass', 'Password is incorrect');
            res.redirect('/');
          }
        } else {
          req.flash('userNotFound', 'The user wasnt found');
          res.redirect('/');
        }
      }
    });
    
	},
  
	signup: function(req, res) {
    res.view();
  },

  createaccount: function(req, res) {

    var user = req.param("user");
    var password = req.param("password");
    
    Users.findByUser(user, function(err, usr) {
      if (err) {
        res.send(500, { error: "DB Error" });
      } else if (usr.length > 0) {
        req.flash('usrTaken', 'Username already Taken')
        res.redirect('/signup')
      } else {
        var hasher = require("password-hash");
        password = hasher.generate(password);
             
        Users.create({user: user, password: password}, function(error, _user) {
          if (error) res.send(500, {error: "DB Error"})
          else {
            req.flash('usrCreated', 'Account created !');
            res.redirect('/');
          }
        });
      }
    });
  },

  dashboard: function(req, res) {
    Urls.findByUserId(req.session.user.id, function(err, u) {
      if (err) {
        res.send(500, { error: 'db error'})
      }
      res.view({ user: req.session.user, urls: u } )
    })
  },

  storeUrl: function(req, res) {
    var userid = req.session.user.id
    if (req.url) {
      Urls.create({url: req.url, userId: userid }, function(err, url) {
        if (url) res.redirect('/dashboard')
        else res.send(500, { error: 'wtf'})
      })
    }
  },
  
  delUrl: function(req, res) {

    var urlId = req.query.urlId

    Urls.findOneById(urlId, function(err, doc) {
      console.log(doc)
      if (doc.userId != req.session.user.id) res.send('espertinho !')
      Urls.destroy({ id: doc.id }, function(err, d) {
        if (err) res.send(500, { error: 'wtf' })
        else {
          req.flash('sucDel', 'Sucessful Deleted !')
          res.redirect('/dashboard')
        }
      })
    })

  },

  logout: function(req, res) {
    req.session.user = null
    req.session.authenticated = false
    req.flash('logout', 'Sucessfully logged out !')
    res.redirect('/')
  }

};