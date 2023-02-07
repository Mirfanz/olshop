import User from "@/models/UserModel";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (!req.method === "POST")
    res.status(401).json({ status: "error", message: "Mau ngapain hayooo!" });

  const data = req.body;
  const passwordHash = await bcrypt.hash(data.password, 10);
  try {
    const response = await User.create({
      email: data.email,
      password: passwordHash,
      username: data.username,
      fullname: data.name,
    });
    res.status(200).json({
      status: "success",
      message: "Pendaftaran berhasil.",
      data: [],
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "error", message: error.original.sqlMessage });
  }
}
