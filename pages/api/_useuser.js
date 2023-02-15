import User from "@/models/UserModel";

export default async function handler(req, res) {
  const { Authorization } = req.headers;
  console.log(Authorization);
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.log(err);
    return null;
    //  console.log("Token not valid JWT");
  }

  const encodedJwt = jwt.decode(token);
  if (!encodedJwt.username) return null;
  //    console.log("Nothing username on JWT");

  try {
    const response = await User.findOne({
      where: {
        username,
      },
    });
    if (!response)
      return res.status(401).json({
        message: "Pengguna tidak ditemukan.",
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
