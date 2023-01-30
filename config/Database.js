import { Sequelize } from "sequelize";

const db = new Sequelize("db_nextjs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
