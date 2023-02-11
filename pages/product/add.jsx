import { Input, Button, Select } from "@material-tailwind/react";
import axios from "axios";
// import authInit, { get_user, require_login } from "@/middleware/auth";

export async function getServerSideProps(context) {
  return {
    props: {},
    // redirect: {
    //   destination: "/search",
    //   permanent: true,
    // },
  };
}

const post = () => {
  async function formHandler(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    axios.post(
      "/api/products/add",
      {
        title: form.get("title"),
        price: form.get("price"),
        category: form.get("category"),
        image: "/backpack.jpg",
      },
      {
        headers: {
          Authorization: "",
        },
      }
    );
  }
  return (
    <div className="container">
      <h1>Post New Product</h1>
      <form onSubmit={formHandler}>
        <div className="flex flex-col gap-5">
          <Input
            className=""
            variant="outlined"
            type="text"
            name="title"
            required
            label="Product Name"
          />
          <Input
            className=""
            variant="outlined"
            type="number"
            name="price"
            required
            label="Price"
          />
          <div className="">
            <Input
              className=""
              variant="outlined"
              type="text"
              name="category"
              required
              list="listCategory"
              label="Categories"
            />
            <small>use coma(,) to separate categories.</small>
          </div>
          <datalist id="listCategory">
            <option value="satu"></option>
            <option value="dua"></option>
          </datalist>
          <Input
            className=""
            variant="outlined"
            type="file"
            accept="image/*"
            name="image"
            label="Foto Produk"
          />
          <Button className="mt-5">Post</Button>
        </div>
      </form>
    </div>
  );
};

export default post;
