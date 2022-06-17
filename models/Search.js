const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model {}

Search.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    videogame: DataTypes.STRING,
    console:  DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Search;