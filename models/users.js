'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = function(sequilize, Datatypes) {
    var Users = sequilize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        }
    },{
        classMethods: {
            associate: function(models){
                // associations can be defined here
            }
        },
        tableName: "Users"
    });
    return Users;
};