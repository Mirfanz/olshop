import axios from "axios";
import User from "@/models/UserModel";

export default async function getuser(req, res) {
  const { username } = req.query;

  try {
    const response = await User.findOne({
      where: {
        username,
      },
    });
    if (!response)
      return res.status(401).json({
        message: "Pengguna tidak ditemukan.",
        data: {},
      });
    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Error tidak diketahui",
    });
  }
}
