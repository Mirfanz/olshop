// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Product from "@/components/Product";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/products");
  let products = [];
  if (response.ok) products = await response.json();
  return {
    props: {
      products,
    },
  };
}

const Home = ({ products }) => {
  // const getList = async () =>
  //   await fetch("http://localhost:3000/api/products")
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       setListProduct(resp);
  //     });

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
      <header className={styles.header}>
        <div className={styles.container}>
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
        </div>
      </header>

      <main>
        <section>
          <div className={styles.container}>
            <div className={styles.products}>
              {/* <Product
                title={"Baju Jdsajdf"}
                price={"100.000"}
                url="backpack.jpg"
              /> */}
              {products.map((product, index) => {
                return (
                  <Product
                    title={product.title}
                    price={product.price}
                    url={product.img_url}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
