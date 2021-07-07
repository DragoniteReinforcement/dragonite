const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const PORT = 3000;
// const userController = require('./controllers/userController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

// // users
// app.post('/newUser', userController.newUser, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

// app.delete('/deleteUser', userController.deleteUser, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

// // events
// app.post('/newEvent', eventController.addEvent, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

// app.get('/getEvent', eventController.getEvents, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

// app.delete('/deleteEvent', eventController.deleteEvent, (req, res) => {
//   res.status(200).json(res.locals.result);
// });

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
