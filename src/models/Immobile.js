import { model, Schema } from 'mongoose';

const ImmobileSchema = new Schema({
    img: {
        type: String, required: true
    },
    perspectiveImgs: {
        type: [String], required: true
    },
    title: {
        type: String, required: true
    },
    location: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    bedNumbers: {
        type: Number, required: true
    },
    bathNumbers: {
        type: Number, required: true
    },
    propertySize: {
        type: Number, required: true
    },
    latitude: {
        type: String, required: true
    },
    longitude: {
        type: String, required: true
    },
    immobileType: {
        type: String, required: true
    },
    ownerImg: {
        type: String, required: true
    },
    ownerName: {
        type: String, required: true
    }
});

export const Immobile = model('immobile', ImmobileSchema);