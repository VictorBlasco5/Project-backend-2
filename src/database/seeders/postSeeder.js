import mongoose from "mongoose";
import  Post  from "../../models/Post.js";
import "dotenv/config.js";
import { dbConection } from "../db.js";


export const postSeeder = async (req, res) => {

    try {
        await dbConection();

        const post1 = new Post({
            description: "Chasing the sun and soaking up the summer vibes",
            userId: "65f35ee142c8d7d843b6a39d"
        });
        await post1.save();

        const post2 = new Post({
            description: "Just a bunch of goofballs making memories together",
            userId: "65f35ee142c8d7d843b6a3a0"
        });
        await post2.save();

        const post3 = new Post({
            description: "Happy place",
            userId: "65f35ee142c8d7d843b6a3a0"
        });

        await post3.save();

        const post4 = new Post({
            description: "First I drink the coffee, then I do the things",
            userId: "65f35ee142c8d7d843b6a3a3"
        });

        await post4.save();

        const post5 = new Post({
            description: "Always on your team",
            userId: "65f3344f12af07873c9993b5"
        });

        await post5.save();

        const post6 = new Post({
            description: "Love you to the moon and back",
            userId: "65f35ee142c8d7d843b6a3a5"
        });

        await post6.save();

        const post7 = new Post({
            description: "Save tears for happier days",
            userId: "65f35ee142c8d7d843b6a3a7"
        });
        await post7.save();

        const post8 = new Post({
            description: "Beast mode",
            userId: "65f35ee142c8d7d843b6a3a7"
        });
        await post8.save();

        const post9 = new Post({
            description: "Next-level wisdom achieved",
            userId: "65f35ee142c8d7d843b6a3a9"
        });
        await post9.save();

        const post10 = new Post({
            description: "All the best drinks come with umbrellas",
            userId: "65f35ee142c8d7d843b6a3ab"
        });
        await post10.save();

        const post11 = new Post({
            description: "We only live once. If we do it right, that’s enough",
            userId: "65f35ee142c8d7d843b6a3ad"
        });
        await post11.save();

        const post12 = new Post({
            description: "We don't remember days, we remember moments",
            userId: "65f35ee142c8d7d843b6a3ad"
        });
        await post12.save();

        const post13 = new Post({
            description: "Try again. Fail again. Fail better",
            userId: "65f35ee142c8d7d843b6a3af"
        });
        await post13.save();

        const post14 = new Post({
            description: "The best way to predict the future is to create it ",
            userId: "65f35ee142c8d7d843b6a3b1"
        });
        await post14.save();

        const post15 = new Post({
            description: "Deserve your dream",
            userId: "65f35ee142c8d7d843b6a3b1"
        });
        await post15.save();




        console.log('---------------------------');
        console.log('Posts successfully saved');
        console.log('---------------------------');


    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
}

