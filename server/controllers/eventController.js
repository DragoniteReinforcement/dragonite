const db = require('../models/appModel');

const eventController = {};

eventController.getEvents = (req, res, next) => {
  const query = 'SELECT * FROM "events"';
  db.query(query)
    .then((data) => {
      res.locals.events = data.rows;
      console.log(res.locals.events);
      return next();
    })
    .catch((err) => next(err));
};

module.exports = eventController;
