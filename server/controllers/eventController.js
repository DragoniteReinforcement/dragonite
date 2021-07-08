const db = require('../models/appModel.js');

const eventController = {};

eventController.newEvent = (req, res, next) => {
  console.log('entered the eventController.newEvent');
  const { name, rules, prize, start_date, end_date } = req.body;
  const eventValues = [name, rules, prize, start_date, end_date];
  const myQuery =
    'INSERT INTO events ( name, rules, prize, start_date, end_date) VALUES( $1, $2, $3, $4, $5) RETURNING id, start_date, end_date';
  db.query(myQuery, eventValues)
    .then((data) => {
      console.log(data.rows);
      res.locals.eventId = data.rows[0].id;
      res.locals.startDate = data.rows[0].start_date;
      res.locals.endDate = data.rows[0].end_date;
      console.log('res.locals.startDate', res.locals.startDate);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

eventController.getLeaderboard = (req, res, next) => {
  console.log('entered the eventController.getLeaderboard');

  // all completed events from all users; returns an array of objects with the columns as properties
  const query1 = 'select * from users_tasks where completed = true';
  db.query(query1)
    .then((data) => {
      console.log(data.rows);
      res.locals.points = data.rows[0].id;
      res.locals.startDate = data.rows[0].start_date;
      res.locals.endDate = data.rows[0].end_date;
      console.log('res.locals.startDate', res.locals.startDate);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

// iterate through data (array of objects)
// for each object, if

// eventController.getEvents = (req, res, next) => {
//   const { event_name } = req.body;
//   res.locals.results = {
//     event_name, rules, prize, start_date, end_dates,
//   };
//   next();
// };

eventController.deleteEvent = (req, res, next) => {
  const { name } = req.body;
  delEventValues = [name];
  const delEventQuery = 'DELETE FROM events Where name = $1';
  db.query(delEventQuery, delEventValues)
    .then((data) => {
      console.log(data.rows);
      res.locals.results = data;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = eventController;
