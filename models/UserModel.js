import { DataTypes } from "sequelize";
import db from "../config/Database";

const User = db.define(
  "users",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default User;

(async () => {
  await db.sync();
})();
