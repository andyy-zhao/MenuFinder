import { mongoose } from 'mongoose';

const MenuItem = new mongoose.Schema (
    {
        name: String,
        image: String,
        price: String,
        category: String,
    }
)

const RestaurantSchema = new mongoose.Schema (
    {
        name: String,
        location: String,
        openHours: String,
        closingHours: String,
        rating: Number,
        menuItems: [MenuItem],
    }, {timestamps: true}
);


export const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
