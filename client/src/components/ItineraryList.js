import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const ItineraryList = (props) => {

    const { removeFromDom, itinerary, setItinerary} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/itinerary")
        .then((res)=>{
            console.log(res.data);
            setItinerary(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteItinerary = (itineraryId) => {
        axios.delete('http://localhost:8000/api/itinerary/' + itineraryId)
            .then(res => {
                removeFromDom(itineraryId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            {
                itinerary.map((itinerary, index)=>{
                return (
                    <div className='itineraryBox' key={index}>
                        <span>Submitted By: {itinerary.firstName} {itinerary.lastName}</span>
                        <span>Suggestion: {itinerary.itinerarySuggestion}</span>
                        <span>Date/Time: {itinerary.itineraryDate}</span>
                        <Link to={`/itinerary/${itinerary._id}`} id="itineraryLink">Review {itinerary.firstName}'s Suggestion! </Link>
                        <p>
                            <Link to={"/itinerary/edit/" + itinerary._id}><button>Edit</button></Link>
                            <button id="deleteButton" onClick={(e)=>{deleteItinerary(itinerary._id)}}>Delete</button>
                        </p>
                        
                    </div>
                )})
            }
        </div>
    );
}
export default ItineraryList;