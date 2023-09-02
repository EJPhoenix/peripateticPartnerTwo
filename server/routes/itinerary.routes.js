const ItineraryController = require('../controllers/itinerary.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api', ItineraryController.index);
    app.post('/api/itinerary', authenticate, ItineraryController.createItinerary);
    app.get('/api/itinerary', authenticate, ItineraryController.getAllItineraries); 
    app.get('/api/itinerary/:id', authenticate, ItineraryController.getItinerary);
    app.put('/api/itinerary/:id', authenticate, ItineraryController.updateItinerary);
    app.delete('/api/itinerary/:id', authenticate, ItineraryController.deleteItinerary);
}