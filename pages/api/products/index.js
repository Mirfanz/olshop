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
      console.log(req.body);
      const data = req.body;
      try {
        const response = await Product.create(data);
        res.status(200).json(response);
      } catch (error) {
        console.log(error);
        res.status(400).end(`errorno: ${error.errno} -> ${error.sqlMessage}`);
      }
      break;
    default:
      res.status(404);
      break;
  }
}
