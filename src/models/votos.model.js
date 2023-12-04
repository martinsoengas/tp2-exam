import { DataTypes, Model } from 'sequelize';

import connection from '../config/connection.js';

class Voto extends Model {}

Voto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    distrito: {
      type: DataTypes.ENUM,
      values: ['zona1', 'zona2', 'zona3', 'zona4'],
      allowNull: false,
      validate: { notEmpty: true },
    },
    candidato: {
      type: DataTypes.ENUM,
      values: ['candidatoA', 'candidatoB', 'candidatoC', 'enblanco'],
      allowNull: false,
      validate: { notEmpty: true },
    },
  },
  {
    sequelize: connection,
    modelName: 'Voto',
  }
);

export default Voto;
