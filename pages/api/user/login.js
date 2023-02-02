import User from "@/models/UserModel";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (!req.method === "POST")
    res.status(401).json({ message: "Mau ngapain hayooo!" });

  //   const data = JSON.parse(req.body);
  const { username, password } = JSON.parse(req.body);
  console.log(username, password);
  try {
    const response = await User.findOne({
      where: {
        username: username,
      },
    });
    if (!response) res.status(400).json({ message: "User tidak ditemukan" });
    const valid = bcrypt.compareSync(password, response.password);
    if (!valid) res.status(400).json({ message: "Sandi salah " });
    res.status(200).json({
      status: "success",
      message: "Login berhasil.",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ message: "User tidak ditemukan" });
  }
}
