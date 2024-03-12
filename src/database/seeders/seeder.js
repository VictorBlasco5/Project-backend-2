
import mongoose from "mongoose";
import User from "../../models/User.js";
import { dbConection } from "../db.js";
import "dotenv/config.js"


const userSeeder = async (req, res) => {
    try {
        await dbConection();

        const user1 = new User({
            name: "Jaime",
            email: "jaime@jaime.com",
            password_hash: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "user"
          });
          await user1.save();

          const user2 = new User({
            name: "Pedro",
            email: "pedro@pedro.com",
            password_hash: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "admin"
          });
          await user2.save();

          const user3 = new User({
            name: "María",
            email: "maria@maria.com",
            password_hash: "$2b$05$2zb0oYsDmrbtwkqtBWcIzultpJrvPMSEiLERiGQK.0xBz/rd3Htle",
            role: "super_admin"
          });
          await user3.save();

        console.log('---------------------------');
        console.log('Users successfully saved');
        console.log('---------------------------');
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
}

userSeeder();