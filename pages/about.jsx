import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/About.module.css";
import { useState } from "react";

const about = () => {
  const router = useRouter();
  let [val, setVal] = useState("");
  const inpHandler = ({ target }) => {
    console.log(target.value);
    setVal(target.value);
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Halaman About {val}</h1>
        <Link href="/">Home</Link>
        <Link href="/about"> About </Link>
        <button onClick={router.back}>Kembali</button>
        <br />
        <br />
        <input
          onChange={inpHandler}
          type="text"
          name="inp"
          id="inp"
          placeholder="Ketikan Sesuatu Disni"
        />
      </main>
    </>
  );
};

export default about;
