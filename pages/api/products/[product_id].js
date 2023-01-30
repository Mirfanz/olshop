import { Op } from "sequelize";
import Product from "../../../models/ProductModel";

export default async function product(req, res) {
  const { product_id } = req.query;
  //   const data = await Product.findByPk(product_id);
  const data = await Product.findAll({
    where: {
      //   category: null,
      title: {
        [Op.like]: "%an%",
      },
    },
    // offset: 0,
    limit: 3,
  });
  res.status(200).json(data);
}
