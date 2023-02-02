import User from "@/models/UserModel";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (!req.method === "POST")
    res.status(401).json({ message: "Mau ngapain hayooo!" });

  const passwordHash = await bcrypt.hash("1234", 10);
  try {
    const response = await User.create({
      email: "contohemailss@gmail.com",
      password: passwordHash,
      username: "paullyss",
    });
    res.status(200).json({
      status: "success",
      message: "Pendaftaran berhasil.",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Pendaftaran gagal." });
  }
}
