import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment'
import { UserContext } from '../../../App';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcMastercard, faPaypal, faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import './EmployerAccountCreate.css';
import EmployerAccount from './EmployerAccount';



const EmployerAccountCreate = ({ modalIsOpen, closeModal }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const { displayName, email } = loggedInUser;
    const [radio, setRadio] = useState('Credit Card');
    const [serviceType, setServiceType] = useState('Basic');
    const handleRadio = e => {
        setRadio(e.target.value);
    }
    const handleServiceRadio = e => {
        setServiceType(e.target.value);
    }
    
    const handlePaymentSuccess = paymentId => {
        const bookDetails = {
            user: loggedInUser.displayName,
            email: loggedInUser.email,
            photo:loggedInUser.photo,
            PaymentMethod: radio,
            paymentId,
            type: serviceType
        };

        fetch('http://localhost:4200/adding_a_employer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                 if(data){
                     alert('welcome')
                 }
            })
    }
    
    return (
        <div className="container w-100">
                <div className="row ">
                    <h5 className="text-center w-100">Dear {loggedInUser.displayName}</h5>
                    <h6 className="text-center">Please Enter Your Card Information:</h6>
                    <div className=" mb-2 mt-5 w-100 row ">
                        <div className="col-md-8 col-lg-7 col-xs-12" style={{height:'3rem'}}>
                            <p className="ms-2 fw-bold pShip ">Please Select Account Type:</p><br />
                        </div>
                        <div className="col-md-4 col-lg-2 col-xs-12">
                            <select name="service" className="" style={{ borderColor: '#2d524a' ,width:'7rem'}} onChange={handleServiceRadio}>
                                <option>Premium</option>
                                <option >Standard</option>
                                <option>Basic</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-7  col-sm-12 ms-2 bookSection ">
                        <div className="col-md-8 col-sm-12">
                            <p className="me-2 fw-bold">Pay With: </p>
                            <input type="radio" onChange={handleRadio} className="ms-1" id="male" name="gender" defaultChecked={true} value="Credit Card" />
                            <label for="Credit Card"><FontAwesomeIcon className="iconSize  ms-1" icon={faCcMastercard} style={{ color: '#DF3512' }} />Credit Card</label>

                            <input type="radio" onChange={handleRadio} className="ms-1" id="Paypal" name="gender" value="Paypal" />
                            <label for="Paypal"><FontAwesomeIcon className="iconSize ms-1" icon={faCcPaypal} style={{ color: '#253b80' }} />Paypal</label>

                            <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default EmployerAccountCreate;

