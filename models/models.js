const { sequelize } = require('../database/db');
const { DataTypes} = require('sequelize');

const ArticlesModel = sequelize.define('articles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.STRING,
    },
});

const CommentsModel = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.STRING,
    },
});


ArticlesModel.hasMany(CommentsModel);
CommentsModel.belongsTo(ArticlesModel); // комментарии принадлежат статье

module.exports = {
    ArticlesModel,
    CommentsModel
}
