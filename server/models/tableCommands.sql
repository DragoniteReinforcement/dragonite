CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" varchar
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "rules" varchar,
  "prize" varchar,
  "start_date" date,
  "end_date" date
);

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "task_name" varchar,
  "completed_user_id" BOOLEAN,
  "event_id" int REFERENCES events("id")
);

CREATE TABLE "users_events" (
  PRIMARY KEY(user_id, event_id),
  "user_id" int REFERENCES users("id"),
  "event_id" int REFERENCES events("id")
);

CREATE TABLE "users_tasks" (
  PRIMARY KEY(users_id, tasks_id),
  "users_id" int REFERENCES users("id"),
  "tasks_id" int REFERENCES tasks("id")
);


