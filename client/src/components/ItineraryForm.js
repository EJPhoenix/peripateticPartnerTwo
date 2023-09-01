import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ItineraryForm = (props) => {
  const { itinerary, setItinerary } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [itinerarySuggestion, setItinerarySuggestion] = useState("");
  const [itineraryAddress, setItineraryAddress] = useState("");
  const [itineraryDate, setItineraryDate] = useState();
  const [itineraryDescription, setItineraryDescription] = useState("");
  const [itineraryWebsite, setItineraryWebsite] = useState("");
  const [itineraryPhoneNumber, setItineraryPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setItinerarySuggestion("");
    setItineraryAddress("");
    setItineraryDate("");
    setItineraryDescription("");
    setItineraryWebsite("");
    setItineraryPhoneNumber("");
    setErrors({});
    axios
      .post("http://localhost:8000/api/itinerary", {
        firstName,
        lastName,
        itinerarySuggestion,
        itineraryAddress,
        itineraryDate,
        itineraryDescription,
        itineraryWebsite,
        itineraryPhoneNumber,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setItinerary([...itinerary, res.data]);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form className="entryForm" onSubmit={onSubmitHandler}>
        <div>
          <h1>Enter Experience Details Here</h1>
        </div>
        <div>
          <div>
            <p>
              <label for="firstName">Your First Name</label>
              <br />
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              {errors.firstName ? (
                <label style={{ color: "red" }}>
                  {errors.firstName.message}
                </label>
              ) : null}
            </p>

            <p>
              <label for="lastName">Your Last Name</label>
              <br />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              {errors.lastName ? (
                <label style={{ color: "red" }}>
                  {errors.lastName.message}
                </label>
              ) : null}
            </p>

            <p>
              <label for="itinerarySuggestion">Itinerary Suggestion</label>
              <br />
              <input
                type="text"
                id="itinerarySuggestion"
                value={itinerarySuggestion}
                onChange={(e) => setItinerarySuggestion(e.target.value)}
              />
              <br />
              {errors.itinerarySuggestion ? (
                <label style={{ color: "red" }}>
                  {errors.itinerarySuggestion.message}
                </label>
              ) : null}
            </p>

            <p>
              <label for="address">Address</label>
              <br />
              <input
                type="text"
                id="address"
                value={itineraryAddress}
                onChange={(e) => setItineraryAddress(e.target.value)}
              />
              <br />
              {errors.itineraryAddress ? (
                <label style={{ color: "red" }}>
                  {errors.itineraryAddress.message}
                </label>
              ) : null}
            </p>

            <p>
              <label for="dateAndTime">Date and Time</label>
              <br />
              <input
                type="datetime-local"
                id="dateAndTime"
                value={itineraryDate}
                onChange={(e) => setItineraryDate(e.target.value)}
              />
              <br />
              {errors.itineraryDate ? (
                <label style={{ color: "red" }}>
                  {errors.itineraryDate.message}
                </label>
              ) : null}
            </p>

            <p>
              <label for="experienceDescription">Experience Description</label>
              <br />
              <textarea
                type="text"
                id="experienceDescription"
                value={itineraryDescription}
                onChange={(e) => setItineraryDescription(e.target.value)}
              />
              <br />
              {errors.itineraryDescription ? (
                <label style={{ color: "red" }}>
                  {errors.itineraryDescription.message}
                </label>
              ) : null}
            </p>
          </div>
          <div>
            <h3>Optional:</h3>
            <br />
            <p>
              <label for="experienceURL">Experience URL</label>
              <br />
              <input
                type=""
                id="experienceURL"
                value={itineraryWebsite}
                onChange={(e) => setItineraryWebsite(e.target.value)}
              />
            </p>
            <p>
              <label for="experiencePhoneNumber">Experience Phone Number</label>
              <br />
              <input
                type="tel"
                id="experiencePhoneNumber"
                value={itineraryPhoneNumber}
                onChange={(e) => setItineraryPhoneNumber(e.target.value)}
              />
            </p>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default ItineraryForm;
