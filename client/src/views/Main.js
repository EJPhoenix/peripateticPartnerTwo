import React, { useState } from "react";
import axios from "axios";
import ItineraryForm from "../components/ItineraryForm";
import ItineraryList from "../components/ItineraryList";

const Main = (props) => {
  const [itinerary, setItinerary] = useState([]);

  const removeFromDom = (itineraryId) => {
    setItinerary(
      itinerary.filter((itinerary) => itinerary._id !== itineraryId)
    );
  };

  return (
    <div>
      <div className="homePageTop">
        <ItineraryForm itinerary={itinerary} setItinerary={setItinerary} />
      </div>
      <div className="homePageBottom">
        <ItineraryList
          itinerary={itinerary}
          setItinerary={setItinerary}
          removeFromDom={removeFromDom}
        />
      </div>
    </div>
  );
};
export default Main;
