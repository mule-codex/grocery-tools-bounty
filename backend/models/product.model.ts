import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import categoryModel from "./catergories.models.js";

const productModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
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
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true,
    },



  }
)
productModel.belongsTo(categoryModel, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
})
categoryModel.hasMany(productModel, {
  foreignKey: "catergoryId"
})
export default productModel
