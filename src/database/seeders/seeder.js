import { postSeeder } from "./postSeeder.js";
import { userSeeder } from "./userSeeder.js"


const launchSeeder = async () => {
    await userSeeder();
    await postSeeder();
}

launchSeeder();