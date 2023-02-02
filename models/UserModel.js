import { DataTypes } from "sequelize";
import db from "../config/Database";

const User = db.define(
  "users",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Paijo Loro",
    },
    // is_active: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    //   allowNull: true,
    // },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default User;

(async () => {
  await db.sync();
})();
