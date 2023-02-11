import { Input, Button, Checkbox } from "@material-tailwind/react";
import Cookies from "js-cookie";
import cookies from "next-cookies";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Swal from "sweetalert2";

const login = () => {
  // console.log(Cookies.get("token"));
  const router = useRouter();

  async function submitLogin(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const body = JSON.stringify({
      username: form.get("username"),
      password: form.get("password"),
    });
    const responseLog = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await responseLog.json();
    console.log(data);
    // check is success
    if (!responseLog.ok)
      return Swal.fire({
        icon: "error",
        titleText: "Login Gagal!",
        text: data.message,
      });
    // Set cookie token
    Cookies.set("token", data.data.token);
    return router.back();
  }
  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src="svg/draw2.svg" className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={submitLogin} autoComplete="off">
                <div className="flex flex-col p-5 gap-7 rounded-md bg-white shadow-lg">
                  <div className="flex justify-center">
                    <h2 className="text-2xl font-bold">LOGIN TO ACCOUNT</h2>
                  </div>
                  <Input
                    variant="outlined"
                    label="Username or Email"
                    size="lg"
                    className="bg-slate-100"
                    name="username"
                    required
                  />
                  <Input
                    variant="outlined"
                    label="Password"
                    type="password"
                    className="bg-slate-100"
                    icon={<i className="bx bx-fw bx-lock" />}
                    size="lg"
                    name="password"
                    required
                    minLength={8}
                  />
                  {/* <Checkbox label="Remember Me" /> */}

                  <Button type="submit">Login</Button>

                  <p>
                    Belum punya akun? <Link href="/auth/register">Daftar</Link>
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

export default login;
