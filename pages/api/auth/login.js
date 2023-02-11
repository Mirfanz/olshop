import User from "@/models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import Cookies from "js-cookie";

export default async function handler(req, res) {
  if (!req.method === "POST")
    res.status(401).json({ message: "Mau ngapain hayooo!" });

  const { username, password } = req.body;
  console.log(username, password);
  try {
    const response = await User.findOne({
      where: {
        [Op.or]: [{ username: username }, { email: username }],
      },
    });

    // Vaidation
    if (!response)
      res.status(400).json({ message: "Username atau password salah" });
    const valid = bcrypt.compareSync(password, response.password);
    if (!valid)
      res.status(400).json({ message: "Username atau passwoord salah" });

    // send response
    const token = jwt.sign(
      {
        username: response.username,
        fullname: response.fullname,
      },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({
      status: "success",
      message: "Login berhasil.",
      data: {
        fullname: response.fullname,
        username: response.username,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "unknown error" });
  }
}
