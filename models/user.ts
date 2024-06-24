import { Schema, model } from "mongoose";

//Schemas
const workout = new Schema({
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String, 
        required: true
    },
    exercises: {
        type: Array,
        required: true
    }

}, {timestamps: true, autoIndex: true});


// Exports
export const workoutModel = model('Workout', workout);