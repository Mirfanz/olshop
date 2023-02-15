import jwt from "jsonwebtoken";
import nookies from "nookies";
import axios from "axios";

export let isLoggedIn = false;
export let token = null;
export let user = {};
let initialized = false;

export default async function useUser(ctx, advance = false) {
  initialized = true;
  nookies.destroy(ctx, "token");
  const cookies = nookies.get(ctx);
  token = cookies.token ?? null;
  if (!token) return {};

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.log(err);
    return {};
  }

  const encodedJwt = jwt.decode(token);
  if (!encodedJwt.username) return {};

  if (!advance) return encodedJwt;

  const response = await axios
    .get(`${process.env.BASE_URL}/api/_useuser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      console.log(err);
      return {};
    });

  return response;
}
