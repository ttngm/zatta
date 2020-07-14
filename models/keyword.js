'use strict';

module.exports = function (sequelilze, Datatypes) {
    var Keywords = sequelilze.define('Keywords', {
        keywordId: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIngrement: true,
            allowNull: false,
            field: 'keyword_id'
        },
        userId: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            refurence: {
                model: sequelilze.models.users,
                key: id
            },
            field: 'user_id'
        },
        keyword: {
            type: Datatypes.STRING,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            },
            tableName: "keywords"
        });
    return Keywords;
};