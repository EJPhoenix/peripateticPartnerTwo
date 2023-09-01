import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Update = (props) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [itinerarySuggestion, setItinerarySuggestion] = useState("");
  const [itineraryAddress, setItineraryAddress] = useState("");
  const [itineraryDate, setItineraryDate] = useState("");
  const [itineraryDescription, setItineraryDescription] = useState("");
  const [itineraryWebsite, setItineraryWebsite] = useState("");
  const [itineraryPhoneNumber, setItineraryPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/itinerary/" + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setItinerarySuggestion(res.data.itinerarySuggestion);
        setItineraryAddress(res.data.itineraryAddress);
        setItineraryDate(res.data.itineraryDate);
        setItineraryDescription(res.data.itineraryDescription);
        setItineraryWebsite(res.data.itineraryWebsite);
        setItineraryPhoneNumber(res.data.itineraryPhoneNumber);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateItinerary = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/itinerary/" + id, {
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
        navigate("/home");
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
      <div className="updateContainer">
        <form onSubmit={updateItinerary}>
          <h1>Update Itinerary</h1>
          <p>
            <label for="firstName">First Name</label>
            <br />
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <br />
            {errors.firstName ? (
              <label style={{ color: "red" }}>{errors.firstName.message}</label>
            ) : null}
          </p>
          <p>
            <label for="lastName">Last Name</label>
            <br />
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <br />
            {errors.lastName ? (
              <label style={{ color: "red" }}>{errors.lastName.message}</label>
            ) : null}
          </p>
          <p>
            <label for="itinerarySuggestion">Itinerary Suggestion</label>
            <br />
            <input
              id="itinerarySuggestion"
              type="text"
              name="itinerarySuggestion"
              value={itinerarySuggestion}
              onChange={(e) => {
                setItinerarySuggestion(e.target.value);
              }}
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
              id="address"
              type="text"
              name="itineraryAddress"
              value={itineraryAddress}
              onChange={(e) => {
                setItineraryAddress(e.target.value);
              }}
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
            <p
              name="itineraryDate"
              for="dateAndTime"
              value={itineraryDate}
              onChange={(e) => {
                setItineraryDate(e.target.value);
              }}
            >
              <b>Current Date/Time: {itineraryDate}</b>
              <br />
              <input
                type="datetime-local"
                name="itineraryDate"
                id="dateAndTime"
                value={itineraryDate}
                onChange={(e) => {
                  setItineraryDate(e.target.value);
                }}
              />
            </p>
          </p>
          <p>
            <label for="experienceDescription">Experience Description</label>
            <br />
            <textarea
              type="text"
              name="itineraryDescription"
              id="experienceDescription"
              value={itineraryDescription}
              onChange={(e) => {
                setItineraryDescription(e.target.value);
              }}
            />
            <br />
            {errors.itineraryDescription ? (
              <label style={{ color: "red" }}>
                {errors.itineraryDescription.message}
              </label>
            ) : null}
          </p>
          <h3>Optional:</h3>
          <p>
            <label for="experienceURL">Experience URL</label>
            <br />
            <input
              type=""
              name="itineraryWebsite"
              id="experienceURL"
              value={itineraryWebsite}
              onChange={(e) => {
                setItineraryWebsite(e.target.value);
              }}
            />
          </p>
          <p>
            <label for="experiencePhoneNumber">Experience Phone Number</label>
            <br />
            <input
              type="tel"
              id="experiencePhoneNumber"
              name="itineraryPhoneNumber"
              value={itineraryPhoneNumber}
              onChange={(e) => {
                setItineraryPhoneNumber(e.target.value);
              }}
            />
          </p>
          <button type="submit">Submit</button>
          <p>
            <button>
              <Link to={"/home"}>Back</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Update;
