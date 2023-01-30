// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Product from "@/components/Product";

const Home = () => {
  const router = useRouter();
  const categories = [
    "Pertama",
    "Kedua",
    "Ketiga",
    "Keempat",
    "Kelma",
    "Keenam",
    "Ketujuh",
    "Kedelapan",
  ];

  return (
    <Layout title="Home">
      <Nav />
      <header className={styles.header}>
        <div className={styles.container} style={{ paddingBottom: "1rem" }}>
          <h1 className="font-larger">
            <span className="text-black">Zastya</span>
            <br />
            <span className="text-violet-600">Collections</span>
          </h1>

          <form action="">
            <div className={styles.searchInput}>
              <button type="submit">
                <i className="bx bx-fw bx-search-alt"></i>
              </button>
              <input
                type="search"
                pattern="[A-Za-z0-9 ,./-]*"
                placeholder="Cari produk"
                required
              />
            </div>
          </form>

          <div className={styles.categories}>
            {/* <button className={styles.active}>Semua</button> */}
            {categories.map((item) => {
              return (
                <button className="bg-blue-700 outline-none bg-opacity-10 rounded-md px-2 py-1 border-blue-700">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className={styles.container}>
            <div className={styles.products}>
              <Product
                title={"Baju Jdsajdf"}
                price={"100.000"}
                url="backpack.jpg"
              />
              <Product title={"Baju"} price={"100.000"} url="backpack.jpg" />
              <Product title={"Baju"} price={"100.000"} url="backpack.jpg" />
              <Product title={"Baju"} price={"100.000"} url="backpack.jpg" />
              <Product title={"Baju"} price={"100.000"} url="backpack.jpg" />
              <Product
                title={"Nama Produk Tampil Disini"}
                price={"67.000"}
                url="backpack.jpg"
              />
              <Product
                title={"Nama Produk Tampil Disini"}
                price={"89.000"}
                url="backpack.jpg"
              />
              <Product
                title={"Nama Produk Tampil Disini"}
                price={"250.000"}
                url="backpack.jpg"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
