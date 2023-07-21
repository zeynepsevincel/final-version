import React, {useState,setState} from 'react';
import './formy.css'

function Formy() {
    
    const [Adults, setAdults] = useState(null);
    const [Children, setChildren] = useState(null);
    const [email, setEmail] = useState(null);
    const [checkin,setcheckin] = useState(null);
    const [checkout,setcheckout] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Adults"){
            setAdults(value);
        }
        if(id === "Children"){
            setChildren(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "checkin"){
            setcheckin(value);
        }
        if(id === "checkout"){
            setcheckout(value);
        }

    }

    const handleSubmit  = () => {
        console.log(Adults,Children,email,checkin,checkout);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Adults">Adults</label>
                    <input className="form__input" type="number" value={Adults} onChange = {(e) => handleInputChange(e)} id="Adults" placeholder="Number of Adults"/>
                </div>
                <div className="Children">
                    <label className="form__label" for="Children">Children</label>
                    <input  type="number" name="" id="Children" value={Children}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Children"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Check In </label>
                    <input  type="date" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="checkin">
                    <label className="form__label" for="checkin">Check Out</label>
                    <input className="form__input" type="date"  id="checkin" value={checkin} onChange = {(e) => handleInputChange(e)} placeholder="phone number"/>
                </div>
            </div>
        
        </div>
       
    )       
}

export default Formy;