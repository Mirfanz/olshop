import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import axios from "axios";

export async function getServerSideProps(context) {
  const resp = await axios.get("http://localhost:3000/api/products");
  console.log(resp);
  return {
    props: {
      data: resp.data,
    },
  };
}

const search = ({ data }) => {
  return (
    <Layout title="Pencarian">
      <Nav />
      {JSON.stringify(data)}
    </Layout>
  );
};

export default search;
