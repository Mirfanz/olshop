import { Input, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookies from "next-cookies";
import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Swal from "sweetalert2";

export async function getServerSideProps(context) {
  const allCookies = cookies(context);
  console.log(context.req.headers);
  if (
    allCookies.token &&
    jwt.verify(allCookies.token, process.env.JWT_SECRET_KEY)
  ) {
    const encodedJwt = jwt.decode(allCookies.token);
    return context.res
      .writeHead(302, { location: `/user/${encodedJwt.username}` })
      .end();
  }
  return {
    props: {},
  };
}
const register = () => {
  const router = useRouter();
  const [fields, setFields] = useState({});
  function fieldHandler(e) {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
    console.log(fields);
  }
  async function registerHandler(e) {
    e.preventDefault();

    // Validation:
    if (fields.password != fields.password2)
      return Swal.fire({
        icon: "warning",
        title: "Password tidak sama!",
      });

    // Do POST
    const responseReg = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    // if success register
    if (responseReg.status === 200) return router.push("/login");

    // if register failed
    const data = await responseReg.json();
    Swal.fire({
      icon: "error",
      text: data.message,
    });
  }
  return (
    <>
      <section className="lg:h-screen">
        <div className="container lg:px-6 py-12 lg:h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src="svg/draw2.svg" className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={registerHandler} autoComplete="off">
                <div className="flex flex-col p-5 gap-7 rounded-md bg-white shadow-lg">
                  <div className="flex justify-center">
                    <h2 className="text-2xl font-bold">REGISTER ACCOUNT</h2>
                  </div>
                  <Input
                    onChange={fieldHandler}
                    label="Nama Lengkap"
                    name="name"
                    type={"text"}
                    required
                    minLength={5}
                  />
                  <Input
                    onChange={fieldHandler}
                    label="Email"
                    name="email"
                    type={"email"}
                    required
                  />
                  <Input
                    onChange={fieldHandler}
                    // className="invalid:border-red-600 invalid:bg-red-100"
                    label="Username"
                    name="username"
                    type={"text"}
                    pattern="[a-zA-Z0-9._]*"
                    required
                    minLength={3}
                  />
                  <Input
                    onChange={fieldHandler}
                    label="Password"
                    name="password"
                    type={"password"}
                    required
                    minLength={8}
                  />
                  <Input
                    onChange={fieldHandler}
                    label="Repeat Password"
                    name="password2"
                    type={"password"}
                    required
                    minLength={8}
                  />
                  <Button type="submit">DAFTAR</Button>
                  <p>
                    Sudah punya akun? <Link href="/login">Masuk</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default register;
