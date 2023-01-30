const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 80,
    user: "root",
    password: "",
    database: "db_nextjs",
  },
  userParams: {
    userParam1: "451",
  },
});

export default knex;
