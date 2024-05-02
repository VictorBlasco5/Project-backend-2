import mongoose from "mongoose";
import  Post  from "../../models/Post.js";
import "dotenv/config.js";
import { dbConection } from "../db.js";


export const postSeeder = async (req, res) => {

    try {
        await dbConection();

        const post1 = new Post({
            description: "Chasing the sun and soaking up the summer vibes",
            userId: "65f35ee142c8d7d843b6a39d",
            image: "https://www.blogdelfotografo.com/wp-content/uploads/2023/01/hora-azul-hemisferic-valencia.jpg"
        });
        await post1.save();

        const post2 = new Post({
            description: "Just a bunch of goofballs making memories together",
            userId: "65f35ee142c8d7d843b6a3a0",
            image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
        });
        await post2.save();

        const post3 = new Post({
            description: "Happy place",
            userId: "65f35ee142c8d7d843b6a3a0",
            image: "https://img.freepik.com/foto-gratis/increible-atardecer-mar_8353-11296.jpg?w=360&t=st=1712908310~exp=1712908910~hmac=c29f79e5c0650f31e1682c018934658e6d0c1de6e511f439ba3e9fa68da4c580"
        });

        await post3.save();

        const post4 = new Post({
            description: "First I drink the coffee, then I do the things",
            userId: "65f35ee142c8d7d843b6a3a3",
            image: "https://img.freepik.com/foto-gratis/hermosa-puesta-sol-playa_144627-5883.jpg?w=740&t=st=1712908400~exp=1712909000~hmac=a1c3b8640c6576d047886b612338e0eabc294e0a3ab946acaebc5af30da56319"
        });

        await post4.save();

        const post5 = new Post({
            description: "Always on your team",
            userId: "65f35ee142c8d7d843b6a3ab",
            image: "https://img.freepik.com/foto-gratis/hermosa-chica-casa_144627-9748.jpg?w=740&t=st=1712908521~exp=1712909121~hmac=835817214501a3bdcd0ece6b445c48a46b9f6a9518197c9f84c27ecb46cdae1a"
        });

        await post5.save();

        const post6 = new Post({
            description: "Love you to the moon and back",
            userId: "65f35ee142c8d7d843b6a3a5",
            image: "https://img.freepik.com/foto-gratis/amigos-felices-emocionados-reunidos_23-2149165091.jpg?t=st=1712908708~exp=1712912308~hmac=821f76aafe517d3b387d871fa4168881e37416af30200da5bbc9084fdae3ec26&w=740"
        });

        await post6.save();

        const post7 = new Post({
            description: "Save tears for happier days",
            userId: "65f35ee142c8d7d843b6a3a7",
            image: "https://img.freepik.com/foto-gratis/silueta-grupo-personas-divierte-cima-montana-cerca-carpa-puesta-sol_146671-18472.jpg?t=st=1712908740~exp=1712912340~hmac=7c1b63878559da03a2e7891c46400686524045ab9bdabd192bffafb31805b3a8&w=740"
        });
        await post7.save();

        const post8 = new Post({
            description: "Beast mode",
            userId: "65f35ee142c8d7d843b6a3a7",
            image: "https://img.freepik.com/foto-gratis/vista-lateral-espaguetis-verduras-queso-ricotta-plato-blanco-redondo_176474-3223.jpg?t=st=1712908803~exp=1712912403~hmac=a7f76adeb04d4ec322d08329722357f5801a0c37ebde98a57bdc76bd8bf432b8&w=740"
        });
        await post8.save();

        const post9 = new Post({
            description: "Next-level wisdom achieved",
            userId: "65f35ee142c8d7d843b6a3a9",
            image: "https://img.freepik.com/foto-gratis/hombre-mujer-corriendo-vista-lateral-pista_23-2149731293.jpg?t=st=1712908865~exp=1712912465~hmac=b415011e781646a4dd00556907ecfebed6af73dda1fb05cc20e314283e416320&w=740"
        });
        await post9.save();

        const post10 = new Post({
            description: "All the best drinks come with umbrellas",
            userId: "65f35ee142c8d7d843b6a3ab",
            image: "https://img.freepik.com/fotos-premium/dos-joven-hermosa-mujer-hipster-sonriente-ropa-verano-moda_158538-17615.jpg?w=740"
        });
        await post10.save();

        const post11 = new Post({
            description: "We only live once. If we do it right, that’s enough",
            userId: "65f35ee142c8d7d843b6a3ad",
            image: "https://img.freepik.com/foto-gratis/vista-superior-ninos-no-binarios-jugando-juego-colorido_23-2148779611.jpg?t=st=1712908900~exp=1712912500~hmac=51ed526f5afaacf392f4980cbfd1505a064b12601404e127fc0e2b520bb5678c&w=740"
        });
        await post11.save();

        const post12 = new Post({
            description: "We don't remember days, we remember moments",
            userId: "65f35ee142c8d7d843b6a3ad",
            image: "https://img.freepik.com/foto-gratis/mujer-joven-comiendo-pasta-cafe_1303-25263.jpg?t=st=1712908818~exp=1712912418~hmac=fb10f59c5fa9011ec7879f05abfb494c79b7170c7ea597a169a65ba0826769ba&w=360"
        });
        await post12.save();

        const post13 = new Post({
            description: "Try again. Fail again. Fail better",
            userId: "65f35ee142c8d7d843b6a3af",
            image: "https://img.freepik.com/foto-gratis/acogedora-sala-estar-apartamento-moderno_181624-58445.jpg?t=st=1712908973~exp=1712912573~hmac=fa9f724f0f872da188bb82933c8528e014b5e011f1d3074660567a2967e48bc7&w=740"
        });
        await post13.save();

        const post14 = new Post({
            description: "The best way to predict the future is to create it ",
            userId: "65f35ee142c8d7d843b6a3b1",
            image: "https://img.freepik.com/foto-gratis/trozo-tarta-chocolate-cobertura-menta-chocolate-luces-fondo-borroso_181624-16989.jpg?t=st=1712908999~exp=1712912599~hmac=a0bc0c4bc46e7ff6478e99805b5dc20614dc8a32b228937da469c9fc2bdd7105&w=360"
        });
        await post14.save();

        const post15 = new Post({
            description: "Deserve your dream",
            userId: "65f35ee142c8d7d843b6a3b1",
            image: "https://img.freepik.com/foto-gratis/vista-angulo-hombre-musculoso-irreconocible-preparandose-levantar-barra-club-salud_637285-2497.jpg?t=st=1712908945~exp=1712912545~hmac=e840ec9de73c64300d91fee29c3b43ce29ea086d4ebf493d81e37ed96c951ff9&w=740"
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

