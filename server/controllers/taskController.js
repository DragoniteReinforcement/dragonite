const db = require('../models/appModel');

const taskController = {};

taskController.getTasks = (req, res, next) => {
  const query = 'SELECT * FROM "tasks"';
  db.query(query)
    .then((data) => {
      res.locals.tasks = data.rows;
      console.log(res.locals.tasks);
      return next();
    })
    .catch((err) => next(err));
};

module.exports = taskController;
