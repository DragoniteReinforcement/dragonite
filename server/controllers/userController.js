const db = require('../models/appModel.js');

const userController = {};

userController.newUser = (req, res, next) => {
  const { username, password } = req.body;
  const newUserValues = [username, password];
  const newUserQuery = 'INSERT INTO users ( username, password) VALUES( $1, $2)';
  db.query(newUserQuery, newUserValues)
    .then((data) => {
      res.locals.results = data;
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

userController.deleteUser = (req, res, next) => {
  const { username } = req.body;
  const deleteUserValues = [username];
  const deleteUserQuery = 'DELETE from users WHERE username = $1';
  db.query(deleteUserQuery, deleteUserValues)
    .then((data) => {
      res.locals.results = data;
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

userController.getUserId = (req, res, next) => {
  console.log('getUserId', req.body);
  const { username } = req.body;
  console.log(username);
  const usernameValues = [username];
  const userIdQuery = 'SELECT id FROM users WHERE username = $1';
  db.query(userIdQuery, usernameValues)
    .then((data) => {
      // console.log('data: ', data);
      res.locals.userId = data.rows[0].id;
      console.log('res.locals.userId', res.locals.userId);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

userController.getEventId = (req, res, next) => {
  console.log('getEventId', req.body);
  // const { userId } = res.locals.results;
  const userIdValues = [res.locals.userId];
  const eventIdQuery = 'SELECT event_id FROM users_events WHERE user_id = $1';

  db.query(eventIdQuery, userIdValues)
    .then((data) => {
      // console.log('data: ', data);
      res.locals.eventId = data.rows[0].event_id;
      // console.log('res.locals.eventId: ', res.locals.eventId);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

userController.getEventInfo = (req, res, next) => {
  console.log('getEventInfo', req.body);
  // const { event_id } = res.locals.results;
  const eventIdValues = [res.locals.eventId];
  const eventInfoQuery =
    'SELECT id, name, rules, prize, start_date, end_date FROM events WHERE id = $1';

  db.query(eventInfoQuery, eventIdValues)
    .then((data) => {
      // console.log('data: ', data);
      res.locals.eventInfo = data.rows[0];
      // console.log('res.locals.eventInfo: ', res.locals.eventInfo);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

userController.joinEvent = (req, res, next) => {
  const { userId } = res.locals;
  console.log('userId', userId);
  const { eventId } = req.body;
  const values = [userId, eventId];
  const query = 'INSERT INTO users_events ( user_id, event_id) VALUES($1, $2);';

  db.query(query, values)
    .then((data) => {
      res.locals.results = data;
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = userController;
