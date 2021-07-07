const eventController = {};

eventController.newEvent = (req, res, next) => {
  const {
    event_name, rules, prize, start_date, end_date,
  } = req.body;
  res.locals.results = {
    name, rules, prize, start_date, end_date,
  };
  next();
};

eventController.getEvents = (req, res, next) => {
  const { event_name } = req.body;
  res.locals.results = {
    event_name, rules, prize, start_date, end_dates,
  };
  next();
};

eventController.deleteEvent = (req, res, next) => {
  const { event_name } = req.body;
  res.locals.results = { event_name };
  next();
};

module.exports = eventController;
