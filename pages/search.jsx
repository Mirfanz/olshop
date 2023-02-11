import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import axios from "axios";
import { Button } from "@chakra-ui/react";

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
      <Button>AVSA</Button>
      {/* {JSON.stringify(data)} */}
    </Layout>
  );
};

export default search;
