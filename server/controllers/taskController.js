const taskController = {};

taskController.addTask = (req, res, next) => {
  const { task_name, complete_user_id, event_id } = req.body;
  res.locals.results = { user, pass };
  next();
};

taskController.getTask = (req, res, next) => {
  const { task_name, complete_user_id, event_id } = req.body;
  res.locals.results = { user, pass };
  next();
};

taskController.deleteTask = (req, res, next) => {
  const { task_name } = req.body;
  res.locals.results = { task_name };
  next();
};
