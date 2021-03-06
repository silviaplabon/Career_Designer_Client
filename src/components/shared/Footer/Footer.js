import React from 'react';
import AddMessage from '../AddMessage/AddMessage';

import './Footer.css'
const Footer = () => {
    return (
        <div className="" style={{ backgroundColor: '#212529' }}>
            <div className="container">
                <div className="row pt-5 mt-3 text-white rowStyle">
                    <div className="col-md-3  col-sm-3 col-xs-6 col1Style">
                        <ul><h5>Need Help?</h5>
                            <li>Job Service</li>
                            <li>Where is my Job?</li>
                            <li>Contact US</li>
                            <li>Payment</li>
                            <li>Gift Certificates</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col-md-3  col-sm-3 col-xs-6 col2Style">
                        <ul><h5>Visit US</h5>
                            <li>Getting Here</li>
                            <li>Parking</li>
                            <li>Accessibility</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-2 col3Style">
                        <ul><h5>About</h5>
                            <li>Our Story</li>
                            <li>Benefits</li>
                            <li>Team</li>
                            <li>Carrers</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4 addMessageSection">
                        <AddMessage></AddMessage>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;