import fs from "fs";
// import Sequelize from "sequelize";
import Product from "../../../models/ProductModel";

export default async function index(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const response = await Product.findAll();
        res.status(200).json(response);
      } catch (error) {
        console.log(error);
        res.status(500).end(`errorno: ${error.errno} -> ${error.sqlMessage}`);
      }
      break;
    case "POST":
      try {
        const data = {
          ...req.body,
          product_id: Math.floor(Math.random() * 90000 + 10000),
        };
        const response = await Product.create(data);
        res.status(200).json(response);
      } catch (error) {
        res.status(400).end(`errorno: ${error.errno} -> ${error.sqlMessage}`);
      }
      break;

    default:
      res.status(404).end("Method Tidak Diketahui");
      break;
  }
}
