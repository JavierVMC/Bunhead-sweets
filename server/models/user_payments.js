const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_payments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_email'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    expiry: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    network: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    card_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_email",
        using: "BTREE",
        fields: [
          { name: "user_email" },
        ]
      },
    ]
  });
};
