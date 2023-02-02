import User from "@/models/UserModel";

export default async function handler(req, res) {
  if (!req.method === "POST")
    res.status(401).json({ message: "Mau ngapain hayooo!" });

  try {
    const response = await User.create({
      email: "contohemails@gmail.com",
      password: "123",
      username: "paully",
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
