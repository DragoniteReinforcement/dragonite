const express = require('express');
const { send } = require('process');
const path = require('path');
const userController = require('./controllers/userController.js');
const eventController = require('./controllers/eventController.js');
const taskController = require('./controllers/taskController.js');
const authController = require('./controllers/authController.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

app.post('/authenticate', authController.verifyUser, (req, res) => {
  // takes username and password and  all the event info associated with that user
  console.log('Signin initiated');
  if (res.locals.userId) {
    res.status(200).json({ id: res.locals.userId });
    console.log('Successfully logged in');
  } else res.status(200).send('Unsuccessful login attempt');
});

// // users
app.post(
  // Working
  '/getUserEventInfo',
  userController.getUserId,
  userController.getEventId,
  userController.getEventInfo,
  (req, res) => {
    // takes username and returns all the event info associated with that user

    res.status(200).json({
      userId: res.locals.userId,
      eventInfo: res.locals.eventInfo,
      eventId: res.locals.eventId,
    });
  },
);

app.post('/getUserTasks', userController.getUserId, taskController.getUserTasks, (req, res) => {
  // provide username, returns array of objects with with userid, taskname, taskId, taskday, eventId, completed
  res.status(200).json(res.locals.tasks);
});

app.post('/addNewUser', userController.newUser, (req, res) => {
  // working
  // username, password required in req.body
  // console.log(res.locals.userId);
  res.status(200).json(res.locals.userId);
});

app.post(
  '/userJoinsEvent',
  userController.getUserId,
  userController.joinEvent,
  taskController.getEventTaskIds,
  taskController.addUserToTasks,
  (req, res) => {
    // working
    // requires username, eventId in req.body
    res.status(200).json(res.locals.userTaskIds);
  },
);

app.delete('/deleteUser', userController.deleteUser, (req, res) => {
  // working
  // requires username in req.body
  res.status(200).json(res.locals.result);
});

// events
app.post('/newEvent', eventController.newEvent, taskController.createDailyEventTask, (req, res) => {
  // working
  // requires name, rules, prize, start_date, end_date
  // also requires taskName
  res.status(200).json({ eventId: res.locals.eventId });
});

// app.get('/getEvent', eventController.getEvents, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

app.delete('/deleteEvent', eventController.deleteEvent, (req, res) => {
  // working
  // requires name in req.body;
  res.status(200).json(res.locals.result);
});

// route when a user marks a task complete (takes userName and taskID)
app.post('/completeTask', userController.getUserId, taskController.completeTask, (req, res) => {
  // find
  res.status(200).json();
});

app.post('/incompleteTask', userController.getUserId, taskController.incompleteTask, (req, res) => {
  // find
  res.status(200).json();
});

app.get('/getLeaderboard', (req, res) => {
  res.status(200).json();
});

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
