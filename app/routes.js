var Location = require('./models/location');
var User = require('./models/user');

module.exports = function(app) {

  app.post('/api/locations', function(req, res) {
    Location.create(req.body.locations, function(err, loc) {
      if (err) res.send(err);

      // get and return all the locations after creating
      Location.find(function(err, loc) {
        if (err) res.send(err);
        res.json(loc);
      });
    });
  });

  app.get('/api/locations', function(req, res) {
    Location.find(function(err, loc) {
        if (err) res.send(err);
        res.json(loc);
    });
  });

  app.put('/api/locations/:loc_id', function(req, res) {
    Location.findIdAndUpdate(req.params.loc_id, req.body.locations, function(err, loc) {
      if (err) res.send(err);
      res.json(loc);
    });
  });

  app.delete('/api/locations/:loc_id', function(req, res) {
    Location.remove({
      _id: req.params.loc_id
    }, function(err, loc) {
      if (err) res.send(err);

      // get and return all the locations after deleting
      Location.find(function(err, loc) {
        if (err) res.send(err);
        res.json(loc);
      });
    });
  });

  app.post('/register', function(req, res) {
    var user = new User;
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (!user.username ||
      !user.password ||
      !user.email) {
        res.status(400).send('Please fill in all fields');
      } else {
        user.save(function(err) {
          if (err) {
            res.status(400).send('Email / Username already exists');
          } else {
            res.json('Registered');
          }
        });
      }
  });

  app.post('/login', function(req, res) {
    User.findOne({ username: req.body.username })
      .select('email username password')
      .exec(function(err, user) {
        if (err) throw err;
        if (!user) {
          res.status(400).json({ success: false, data: 'User not found'});
        } else {
          var validateUser = user.comparePassword(req.body.password);
          console.log(validateUser);
          // install jsonwebtoken
        }
      });
  });

  app.get('*', function(req, res) {
    res.sendFile('/public/index.html');
  });
};
