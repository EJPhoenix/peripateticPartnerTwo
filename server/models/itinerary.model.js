const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ItinerarySchema = new mongoose.Schema({
    "firstName": { 
        type: String,
        required: [true, "First Name is Required"],
        minLength: [1, "First Name must be at least 1 character"] 
    },
    "lastName": { 
        type: String,
        required: [true, "Last Name is Required"],
        minLength: [1, "First Name must be at least 1 character"]
    },
    "itinerarySuggestion": { 
        type: String,
        required: [true, "Please enter experience suggestion"] 
    },
    "itineraryAddress": { 
        type: String,
        unique: true,
        required: [true, "Location is Required"]
    },
    "itineraryDate": { 
        type: Date,
    },
    "itineraryDescription": { 
        type: String,
        required: [true, "Brief experience explanation required"],
        maxLength: [240, "Description must not exceed 240 characters"] 
    },
    "itineraryWebsite": { 
        type: String
    },
    "itineraryPhoneNumber": { 
        type: String 
    }
}, { timestamps: true });

// ItinerarySchema.plugin(uniqueValidator, { message: 'Someone already entered this address!'});

module.exports = mongoose.model('Itinerary', ItinerarySchema);