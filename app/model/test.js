'use strict';

module.exports = app => {
  const { INTEGER, TEXT, STRING } = app.Sequelize;
  const Test = app.model.define(
    'Test',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
    },
    {
      freezeTableName: true,
      tableName: 'test',
      timestamp: true,
      paranoid: true,
    }
  );
  // Test.associate = function() {
  //   app.model.models.Test.belongsTo(app.model.models., {
  //     foreignKey: '',
  //     targetKey: 'id',
  //     constraints: false,
  //   });
  // };
  return Test;
}; 