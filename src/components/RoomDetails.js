import React, {useState,setState} from 'react';
import './RoomDetails.css'

function RoomDetails() {
    
    const [RoomType, setRoomType] = useState(null);
    const [NumberRooms, setNumberRooms] = useState(null);

    const handleChange = (e) => {
        const {id , value} = e.target;
        if(id === "RoomType"){
            setRoomType(value);
        }
        if(id === "NumberRooms"){
            setNumberRooms(value);
        }

    }

    const handleSubmit  = () => {
        console.log(RoomType,NumberRooms);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="RoomType">
                <label className="form__label" for="RoomType">Room Type</label>
                <select value={RoomType} onChange={(e) => handleChange(e)}>
                     <option id="RoomType" value={RoomType}>Deluxe Room</option>
                     <option id="RoomType" value={RoomType}>Family Suite</option>
                     <option id="RoomType" value={RoomType}>Ocean View</option>
                     <option id="RoomType" value={RoomType}>Executive Suite</option>
                </select>   
                </div>
                <div className="NumberRooms">
                    <label className="form__label" for="NumberRooms">Number of Rooms</label>
                    <input  type="number" name="" id="NumberRooms" value={NumberRooms}  className="form__input" onChange = {(e) => handleChange(e)} placeholder="Number of Rooms"/>
                </div>
        
        </div>
        </div>
       
    )       
}

export default RoomDetails;