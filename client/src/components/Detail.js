import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams} from "react-router-dom";
import Navbar from './Navbar';

const Detail = (props) => {
    const [itinerary, setItinerary] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/itinerary/" + id)
            .then( res => {
                console.log(res.data);
                setItinerary(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteItinerary = (itineraryId) => {
        axios.delete('http://localhost:8000/api/itinerary/' + itineraryId)
            .then(res => {
                navigate("/home")
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className='detailContainer'>
                <div className='itineraryBox'>
                    <p><button><Link to={'/home'}>Back</Link></button></p>
                    <h2>Proposed Experience</h2><br/>
                    <p>First Name: {itinerary.firstName}</p>
                    <p>Last Name: {itinerary.lastName}</p><br/>
                    <p> Itinerary Suggestion: {itinerary.itinerarySuggestion}</p><br/>
                    <p>Experience Address: {itinerary.itineraryAddress}</p><br/>
                    <p>Proposed Date/Time: {itinerary.itineraryDate}</p><br/>
                    <p id='expDesc'>
                        <p>Experience Description:</p><br/>
                        <span>{itinerary.itineraryDescription}</span>
                    </p><br/>
                    <p>Website: {itinerary.itineraryWebsite}</p>
                    <p>Phone Number: {itinerary.itineraryPhoneNumber}</p><br/>
                    <p><button id="deleteButton" onClick={(e)=> {deleteItinerary(itinerary._id)}}>Delete Experience</button></p>
                </div>
            </div>    
        </div>
    );
}
export default Detail;