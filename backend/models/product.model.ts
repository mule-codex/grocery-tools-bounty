import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const productModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
    }

  }
)
export default productModel
