const Itinerary = require('../models/itinerary.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createItinerary = (request, response) => {
    Itinerary.create(request.body)
        .then(itinerary => response.json(itinerary))
        .catch((err) => {
            response.status(500).json(err);
            console.log(err);
        });
}
module.exports.getAllItineraries = (request, response) => {
    Itinerary.find({})
        .then(itineraries => {
            console.log(itineraries);
            response.json(itineraries);
        })
        .catch((err) => {
            response.status(500).json(err)
        })
}
module.exports.getItinerary = (request, response) => {
    Itinerary.findOne({_id:request.params.id})
        .then(itinerary => response.json(itinerary))
        .catch((err) => {
            response.status(500).json(err)
        });
}
module.exports.updateItinerary = (request, response) => {
    Itinerary.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedItinerary => response.json(updatedItinerary))
        .catch((err) => {
            response.status(500).json(err)
        })
}
module.exports.deleteItinerary = (request, response) => {
    Itinerary.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => {
            response.status(500).json(err)
        })
}