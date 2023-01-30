import Layout from "@/components/Layout";
import Nav from "@/components/Nav";

const search = ({ hasil }) => {
  return (
    <Layout title="Pencarian">
      <Nav />
      <h1>Pencarian {hasil}</h1>
    </Layout>
  );
};

export default search;

export const getStaticProps = async () => {
  // const response = await fetch("http://localhost:3000/api/products");
  // const data = await response.json();
  return {
    props: {
      products: { hasil: 20 },
    },
  };
};
