import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="Toko Pakaian, Perabot, Makanan, dan lainnya."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
