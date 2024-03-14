
import mongoose from "mongoose";
import  User  from "../../models/User.js";
import "dotenv/config.js";
import { dbConection } from "../db.js";


export const userSeeder = async (req, res) => {
    try {
        await dbConection();

        const user1 = new User({
            _id: "65f35ee142c8d7d843b6a39d",
            name: "user",
            email: "user@user.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user1.save();

        const user2 = new User({
            _id: "65f35ee142c8d7d843b6a3a0",
            name: "admin",
            email: "admin@admin.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "admin"
        });
        await user2.save();

        const user3 = new User({
            _id: "65f35ee142c8d7d843b6a3a3",
            name: "super_admin",
            email: "super_admin@super_admin.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "super_admin"
        });
        await user3.save();

        const user4 = new User({
            _id: "65f35ee142c8d7d843b6a3a5",
            name: "pepe",
            email: "pepe@pepe.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user4.save();

        const user5 = new User({
            _id: "65f35ee142c8d7d843b6a3a7",
            name: "victor",
            email: "victor@victor.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user5.save();

        const user6 = new User({
            _id: "65f35ee142c8d7d843b6a3a9",
            name: "laura",
            email: "laura@laura.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user6.save();

        const user7 = new User({
            _id: "65f35ee142c8d7d843b6a3ab",
            name: "lina",
            email: "lina@lina.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user7.save();

        const user8 = new User({
            _id: "65f35ee142c8d7d843b6a3ad",
            name: "miguel",
            email: "miguel@miguel.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user8.save();

        const user9 = new User({
            _id: "65f35ee142c8d7d843b6a3af",
            name: "david",
            email: "david@david.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user9.save();

        const user10 = new User({
            _id: "65f35ee142c8d7d843b6a3b1",
            name: "iván",
            email: "ivan@ivan.com",
            password: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
        });
        await user10.save();


        console.log('---------------------------');
        console.log('Users successfully saved');
        console.log('---------------------------');


    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
}

