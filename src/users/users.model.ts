import { DataTypes } from "sequelize";
import databaseConnection from "../config/database";

const User = databaseConnection.define('User', {
    name: {
        type: DataTypes.TEXT
    },
    last_name: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT,
        unique: true
    },
    role: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }
}, {
    tableName: 'users'
});

export default User;
export interface IUser {
    id?: number;
    name: string;
    last_name: string;
    role: string;
    email: string;
    password: string;
    avatar?: string;
    phone: string;
    status: boolean;
}