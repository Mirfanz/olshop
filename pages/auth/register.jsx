import { useRouter } from "next/router";
import Link from "next/link";
import cookies from "next-cookies";
import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Swal from "sweetalert2";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

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
    const responseReg = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    // if success register
    if (responseReg.status === 200) return router.push("/auth/login");

    // if register failed
    const data = await responseReg.json();
    Swal.fire({
      icon: "error",
      text: data.message,
    });
  }
  return (
    <>
      <section className="h-screen">
        <div className="flex justify-center align-middle px-2 py-12 lg:h-full">
          <form onSubmit={registerHandler} autoComplete="off">
            <div className="flex flex-col gap-4 p-5 w-full rounded-md bg-white shadow-lg">
              <div className="flex justify-center">
                <h2 className="text-2xl font-bold">REGISTER ACCOUNT</h2>
              </div>
              <FormControl>
                <FormLabel>Nama Lengkap</FormLabel>
                <Input
                  className="w-full"
                  variant="filled"
                  onChange={fieldHandler}
                  name="name"
                  type="text"
                  placeholder="Muhammad Irfan"
                  pattern="[a-z A-Z]*"
                  required
                  minLength={5}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Alamat Email</FormLabel>
                <Input
                  className="w-full"
                  variant="filled"
                  onChange={fieldHandler}
                  name="email"
                  type={"email"}
                  placeholder="contoh@gmail.com"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  className="w-full"
                  variant="filled"
                  onChange={fieldHandler}
                  label="Username"
                  name="username"
                  type={"text"}
                  placeholder="username"
                  pattern="[a-zA-Z0-9._]*"
                  required
                  minLength={3}
                />
                <FormHelperText>format ( A-Z a-z 0-9 . _ )</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  className="w-full"
                  variant="filled"
                  onChange={fieldHandler}
                  name="password"
                  type={"password"}
                  placeholder="password"
                  required
                  minLength={8}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Repeat Password</FormLabel>
                <Input
                  className="w-full"
                  variant="filled"
                  onChange={fieldHandler}
                  name="password2"
                  type={"password"}
                  placeholder="password"
                  required
                  minLength={8}
                />
                <FormHelperText>Masukkan kembali kata sandi</FormHelperText>
              </FormControl>

              <Button type="submit" colorScheme={"facebook"}>
                DAFTAR
              </Button>
              <p>
                Sudah punya akun? <Link href="/auth/login">Masuk</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default register;
