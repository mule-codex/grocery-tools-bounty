
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const categoryModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: DataTypes.UUIDV4,
    }
  }
)

categoryModel.hasMany(categoryModel, {
  as: "children",
  foreignKey: "parentId",
})

categoryModel.belongsTo(categoryModel, {
  as: "parent",
  foreignKey: "parentId",
})
export default categoryModel
