// return an array of tasks to the frontend with name, taskId, task day, eventId, completed
// add endpoint for when a task is completed
// add endpoint for user's points and array of users in event with points [{name, points}, {name, points}]

const format = require('pg-format');
const db = require('../models/appModel.js');

const taskController = {};

taskController.createDailyEventTask = (req, res, next) => {
  const { taskName } = req.body;
  const { eventId, startDate, endDate } = res.locals;

  const eventDays = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  console.log(`The event ${eventId} has a duration of ${eventDays} days.`);

  const tasks = [];
  for (let i = 1; i <= eventDays; i++) {
    // tasks.push([taskName, task_day, eventId]);
    tasks.push([taskName, i, eventId]);
  }

  const query1 = format(
    'INSERT INTO tasks (task_name, task_day, event_id) VALUES %L returning id',
    tasks,
  );

  db.query(query1)
    .then((data) => {
      res.locals.taskIds = data.rows;
      // console.log('returned task ids', res.locals.taskIds);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

taskController.getEventTaskIds = (req, res, next) => {
  const query1 = 'SELECT id FROM tasks WHERE event_id = $1';
  const parameters = [req.body.eventId];

  db.query(query1, parameters)
    .then((data) => {
      res.locals.taskIds = data.rows;
      console.log('returned task ids', res.locals.taskIds);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

taskController.addUserToTasks = (req, res, next) => {
  const userTasksIds = [];
  res.locals.taskIds.forEach((currentTask, index) => {
    // userTasksIds.push([users_id, tasks_id]);
    userTasksIds.push([res.locals.userId, currentTask.id]);
  });
  console.log('userTasksIds: ', userTasksIds);

  const query1 = format(
    'INSERT INTO users_tasks (users_id, tasks_id) VALUES %L RETURNING users_id, tasks_id',
    userTasksIds,
  );

  db.query(query1)
    .then((data) => {
      res.locals.userTaskIds = data.rows;
      console.log(
        'returned users_id and task ids after adding user to event tasks ',
        res.locals.userTaskIds,
      );
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

taskController.getUserTasks = (req, res, next) => {
  // need to get tasks for user's event and return task name, day

  const query1 = 'SELECT id FROM tasks WHERE event_id = $1';
  const parameters = [req.body.eventId];

  db.query(query1, parameters)
    .then((data) => {
      res.locals.taskIds = data.rows;
      console.log('returned task ids', res.locals.taskIds);
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
// eventController.newEvent = (req, res, next) => {
//   console.log('entered the eventController.newEvent')
//   const {  name, rules, prize, start_date, end_date} = req.body;
//   const eventValues = [name, rules, prize, start_date, end_date]
//   const myQuery = 'INSERT INTO events ( name, rules, prize, start_date, end_date) VALUES( $1, $2, $3, $4, $5)';
//   db.query(myQuery, eventValues)
//     .then((data) =>{
//       console.log(data.rows)
//       res.locals.results = data;
//       next();
//     }).catch(err => { console.log(err);
//       next(err);
//     } );
// };

// taskController.createUserEventTasks = (req, res, next) => {
//   const { task_name, complete_user_id, event_id } = req.body;
//   res.locals.results = { user, pass };
//   return next();
// };

// taskController.getTask = (req, res, next) => {
//   const { task_name, complete_user_id, event_id } = req.body;
//   res.locals.results = { user, pass };
//   return next();
// };

// taskController.deleteTask = (req, res, next) => {
//   const { task_name } = req.body;
//   res.locals.results = { task_name };
//   return next();
// };

module.exports = taskController;
