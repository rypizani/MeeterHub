const { DataTypes } = require("sequelize");
const { sequelize } = require("../../dbconfig");

const ForgotPassword = sequelize.define('forgotPassword', {

    forgotId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        select: false,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    tokenJWT: {
        type: DataTypes.STRING,
        allowNull: true,
    },
} , {freezeTableName: true});

exports.ForgotPassword = ForgotPassword;