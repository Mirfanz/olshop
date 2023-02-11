import Cookies from "js-cookie";
import cookies from "next-cookies";
import Link from "next/link";
import { useRouter } from "next/router";
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
        <div className=" px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src="/svg/draw2.svg" className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={submitLogin} autoComplete="off">
                <div className="flex flex-col gap-4 p-5 rounded-md bg-white shadow-lg">
                  <h2 className="text-2xl font-bold text-center">
                    LOGIN TO ACCOUNT
                  </h2>
                  <FormControl>
                    <FormLabel>Email or Username</FormLabel>
                    <Input
                      variant="filled"
                      size="lg"
                      className="bg-slate-100"
                      name="username"
                      placeholder="email / username"
                      required
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      variant="filled"
                      type="password"
                      className="bg-slate-100"
                      size="lg"
                      name="password"
                      placeholder="password"
                      required
                      minLength={8}
                      pr="4.5rem"
                    />
                  </FormControl>

                  <Button type="submit" colorScheme={"facebook"}>
                    Login
                  </Button>

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
