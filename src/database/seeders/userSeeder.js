
import mongoose from "mongoose";
import  User  from "../../models/User.js";
import "dotenv/config.js";
import { dbConection } from "../db.js";


export const userSeeder = async (req, res) => {
    try {
        await dbConection();

        const user1 = new User({
            _id: "65f35ee142c8d7d843b6a39d",
            name: "User",
            email: "user@user.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user1.save();

        const user2 = new User({
            _id: "65f35ee142c8d7d843b6a3a0",
            name: "Admin",
            email: "admin@admin.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "admin"
        });
        await user2.save();

        const user3 = new User({
            _id: "65f35ee142c8d7d843b6a3a3",
            name: "Super_admin",
            email: "super_admin@super_admin.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "super_admin"
        });
        await user3.save();

        const user4 = new User({
            _id: "65f35ee142c8d7d843b6a3a5",
            name: "Pepe",
            email: "pepe@pepe.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user4.save();

        const user5 = new User({
            _id: "65f35ee142c8d7d843b6a3a7",
            name: "Víctor",
            email: "victor@victor.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user5.save();

        const user6 = new User({
            _id: "65f35ee142c8d7d843b6a3a9",
            name: "Laura",
            email: "laura@laura.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user6.save();

        const user7 = new User({
            _id: "65f35ee142c8d7d843b6a3ab",
            name: "Lina",
            email: "lina@lina.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user7.save();

        const user8 = new User({
            _id: "65f35ee142c8d7d843b6a3ad",
            name: "Miguel",
            email: "miguel@miguel.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user8.save();

        const user9 = new User({
            _id: "65f35ee142c8d7d843b6a3af",
            name: "David",
            email: "david@david.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
            role: "user"
        });
        await user9.save();

        const user10 = new User({
            _id: "65f35ee142c8d7d843b6a3b1",
            name: "Iván",
            email: "ivan@ivan.com",
            password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
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

