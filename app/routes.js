var Location = require('./models/location');

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

  app.get('*', function(req, res) {
    res.sendFile('/public/index.html');
  });
};
