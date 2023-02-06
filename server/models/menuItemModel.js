import { mongoose } from 'mongoose';

const MenuItemSchema = new mongoose.Schema (
    {
        name: String,
        image: {
            data: Buffer,
            contentType: {type: String, default: ""},
        },
        price: String,
        category: String,
    }, {timestamps: true}
);

export const MenuItem = mongoose.model("MenuItem", MenuItemSchema);
