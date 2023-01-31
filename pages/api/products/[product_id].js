import { Op } from "sequelize";
import Product from "../../../models/ProductModel";

export default async function product(req, res) {
  const { product_id } = req.query;
  const data = await Product.findByPk(product_id);
  switch (req.method) {
    case "GET":
      res.status(200).json(data);
      break;
    case "DELETE":
      try {
        data.destroy();
        res.status(200).json("Berhasil mendelete");
      } catch (error) {
        res.status(400).end("Error Hapus Data");
      }
      break;

    case "POST":
      try {
        const response = await data.update({
          title: "Manusia Purba",
          category: "baju|pakaian",
        });
        res.status(200).json(response);
      } catch (error) {
        console.log(error);
        res.status(400).end("Error Update Data");
      }
      break;
    default:
      break;
  }
}
