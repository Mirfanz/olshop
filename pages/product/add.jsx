import { Input, Button } from "@chakra-ui/react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import useUser, { isLoggedIn } from "@/libs/useuser";

export async function getServerSideProps(context) {
  console.log(context.res);
  const user = await useUser(context);
  console.log(user);
  // console.log("data", data);
  if (!user.username) {
    console.log("redirect to login");
  }
  return {
    props: { user },
    // redirect: {
    //   destination: "/search",
    //   permanent: true,
    // },
  };
}

const post = ({ user }) => {
  return (
    <div className="container">
      <h1>Post New Product {user.fullname ?? "sadam"}</h1>
    </div>
  );
};

export default post;
