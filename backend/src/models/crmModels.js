import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Entrer un prénom'
    },
    lastName: {
        type: String,
        required: 'Entrer un nom'
    },
    email: {
        type: String
    },

    phone: {
        type: Number
    },
    company: {
        type: String
    },

    created_date: {
        type: Date,
        default: Date.now
    }
})