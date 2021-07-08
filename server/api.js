const express = require('express');
const eventController = require('./controllers/eventController');
const taskController = require('./controllers/taskController');

const router = express.Router();

router.get('/events',
  eventController.getEvents,
  (req, res) => {
    res.status(200).json(res.locals.events);
  });

router.get('/tasks',
  taskController.getTasks,
  (req, res) => {
    res.status(200).json(res.locals.tasks);
  });

module.exports = router;
