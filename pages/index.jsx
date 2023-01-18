// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Product from "@/components/Product";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <Layout title="Home">
      <Nav />
      <header className={styles.header}>
        <div className={styles.container} style={{ "padding-bottom": "1rem" }}>
          <div style={{ padding: "1rem 0.5rem" }}>
            <h1 style={{ color: "black" }}>Zastya</h1>
            <h1 style={{ color: "blueviolet" }}>Collections</h1>
          </div>

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
            <button className={styles.active}>Semua</button>
            <button>Perabot</button>
            <button>Pakaian</button>
            <button>Makanan</button>
            <button>Stiker</button>
            <button>Pulsa</button>
            <button>Tagihan</button>
            <button>Lainnya</button>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className={styles.container}>
            <div className={styles.products}>
              <Product
                title={"Baju"}
                price={"100.000"}
                url={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              />
              <Product
                title={"Nama Produk Tampil Disini"}
                price={"67.000"}
                url={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              />
              <Product
                title={"Nama Produk Tampil Disini"}
                price={"89.000"}
                url={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              />
              <Product
                title={"Nama Produk Tampil Disini"}
                price={"250.000"}
                url={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
