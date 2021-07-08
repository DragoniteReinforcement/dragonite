CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "rules" varchar NOT NULL,
  "prize" varchar NOT NULL,
  "start_date" date NOT NULL,
  "end_date" date NOT NULL
);

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "task_name" varchar NOT NULL,
  "task_day" int NOT NULL,
  "event_id" int REFERENCES events("id")
);

CREATE TABLE "users_events" (
  PRIMARY KEY(users_id, events_id),
  "users_id" int REFERENCES users("id"),
  "events_id" int REFERENCES events("id")
);

CREATE TABLE "users_tasks" (
  PRIMARY KEY(users_id, tasks_id),
  "users_id" int REFERENCES users("id"),
  "tasks_id" int REFERENCES tasks("id"),
  "completed" BOOLEAN DEFAULT FALSE
);
