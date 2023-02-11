import axios from "axios";
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
  const [listProduct, setListProduct] = useState(products);
  const [query, setQuery] = useState("");
  async function searchHandler(e) {
    e.preventDefault();
    axios
      .get(`/api/products/search?q=${query}`)
      .then((resp) => {
        setListProduct(resp.data.data);
        console.log(listProduct);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return (
    <Layout title="Home">
      <header className={styles.header}>
        <div className={styles.container}>
          <form onSubmit={searchHandler}>
            <div className={styles.searchInput}>
              <button type="submit">
                <i className="bx bx-fw bx-search-alt"></i>
              </button>
              <input
                type="search"
                pattern="[A-Za-z0-9 ,./-]*"
                placeholder="Cari produk"
                name="q"
                onChange={(e) => setQuery(e.target.value)}
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
              {listProduct.map((product, index) => {
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
