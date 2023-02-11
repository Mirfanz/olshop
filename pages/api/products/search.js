import Product from "@/models/ProductModel";
import { Op } from "sequelize";

export default async function handler(req, res) {
  const { q } = req.query;
  const data = await Product.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { category: { [Op.like]: `%${q}%` } },
      ],
    },
  });

  res.status(200).json({
    data,
  });
}
