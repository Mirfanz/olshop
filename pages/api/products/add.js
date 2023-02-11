import fs from "fs";
// import Sequelize from "sequelize";
import Product from "../../../models/ProductModel";

export default async function index(req, res) {
  if (req.method !== "POST") return res.status(400).end("404");

  console.log(req.body);
  // const data = JSON.parse(req.body);
  // try {
  //   const response = await Product.create(data);
  //   res.status(200).json(response);
  // } catch (error) {
  //   console.log(error);
  //   res.status(400).end(`errorno: ${error.errno} -> ${error.sqlMessage}`);
  // }
}
