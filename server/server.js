const express = require('express');
const { send } = require('process');
const app = express();
const path = require('path');
const PORT = 3000;
const userController = require('./controllers/userController.js');
const eventController = require('./controllers/eventController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

// // users
app.get('/getUserEventInfo', userController.getUserId, userController.getEventId, userController.getEventInfo, (req, res) => {
  //takes username and returns all the event info associated with that user
  res.status(200).json(res.locals.result);
});

app.post('/newUser', userController.newUser, (req, res) => {
  //working
  //username, password required in req.body
  res.status(200).json(res.locals.result);
});

app.post('/userJoinsEvent' , userController.getUserId, userController.joinEvent, (req, res) => {
  //working
  //requires username, event_id in req.body
  res.status(200).json(res.locals.result);
});

app.delete('/deleteUser', userController.deleteUser, (req, res) => {
  //working
  //requires username in req.body
  res.status(200).json(res.locals.result);
});

// events
app.post('/newEvent', eventController.newEvent, (req, res) => {
  //working
  // requires name, rules, prize, start_date, end_date
  res.status(200).json(res.locals.result);
});

// app.get('/getEvent', eventController.getEvents, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

app.delete('/deleteEvent', eventController.deleteEvent, (req, res) => {
  //working
  // requires name in req.body;
  res.status(200).json(res.locals.result);
});

// // tasks
// app.post('/newTask', taskController.addTask, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

// app.get('/getTask', taskController.getTask, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

// app.delete('/deleteTask', taskController.deleteTask, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
