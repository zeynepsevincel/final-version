import React, {useState,setState} from 'react';
import './registration.css'


function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [checkin,setcheckin] = useState(null);
    const [checkout,setcheckout] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
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
        console.log(firstName,lastName,email,checkin,checkout);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="checkin">
                    <label className="form__label" for="checkin">Phone Number</label>
                    <input className="form__input" type="checkin"  id="checkin" value={checkin} onChange = {(e) => handleInputChange(e)} placeholder="phone number"/>
                </div>
            </div>
        
        </div>
       
    )       
}

export default RegistrationForm;