import Head from "next/head";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <Head>
        <title>{props.title ?? "F'Store"}</title>
        <meta
          name="description"
          content="Toko Pakaian, Perabot, Makanan, dan lainnya."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {props.children}
    </div>
  );
};

export default Layout;
