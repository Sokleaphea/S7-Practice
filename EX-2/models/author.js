import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthYear: {           // use camelCase for consistency
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Author;
};