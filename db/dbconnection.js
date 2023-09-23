const mysql2 = require('mysql2');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    "selfProject",
    "root",
    "root",
    {
      dialect: 'mysql',
      dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
      host: "localhost",
      port: 3306
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection has been established successfully to Database MySql."
      );
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
module.exports = sequelize