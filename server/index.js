import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import http from "http";
import "dotenv/config";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { MenuItem } from "./models/menuItemModel.js";
import { Restaurant } from "./models/restaurantModel.js";

import restaurants from './api/restaurants.route.js';

/* CONFIGURATIONS middleware */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json()); // these are all things that express is going to use
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors())
app.use(cookieParser())
app.use(morgan("common"));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));
app.set("view engine", "ejs");

// app.use("/api/v1/restaurants", restaurants)
// app.use("*", (req, res) => res.status(404).json({ error: "not found"}));

const port = process.env.PORT || 4001;
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB connected");
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}).catch((err) => {
    console.log({ err });
    process.exit(1)
});

app.get("/", (req, res) => {
    
});

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage:storage
}).single('itemImage');

app.post('/upload/menuItem',(req, res) => {
    upload(req, res, (err) =>{
        if (err) {
            console.log(err)
        }
        else {
            const newMenuItem = new MenuItem({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                },
                price: req.body.price,
                category: req.body.category,
            })
            newMenuItem.save().then(() => res.send('successfully uploaded menu item'))
            .catch((err) => console.log(err));
        }
    })
});

app.post('/upload/restaurant',(req, res) => {
    upload(req, res, (err) =>{
        if (err) {
            console.log(err)
        }
        else {
            const newRestaurant = new Restaurant({
                name: req.body.name,
                location: req.body.location,
                openHours: req.body.openHours,
                closingHours: req.body.closingHours,
                rating: req.body.rating,
                menuItems: req.body.menuItems,
            })
            newRestaurant.save().then(() => res.send('successfully uploaded restaurant'))
            .catch((err) => console.log(err));
        }
    })
});

app.get('/restaurant', async (req, res) => {
    const allData = await Restaurant.find();
    const data = res.json(allData);
})

app.get('/upload/menuItem', async (req, res) => {
    const allData = await MenuItem.find();
    const data = res.json(allData);
})


export default app