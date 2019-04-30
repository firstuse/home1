import React, { Component } from 'react';
import '../resources/css/RightView.css';

class ContactComponent extends Component {
  render() {
    return (

        <div className="home">
            <div className="homeContainer"
                 data-stellar-background-ratio="0.5">
                <div className="flex justifyCenter alignCenter" >
                    <div className="col-md-8 text align-left mt-5">
                        <div className="desc">
                            <p> Address: C#6, Spice garden (Bangalore) </p>
                            <p> Contact No: +91-9686-836792 </p>
                            <p> Email: middha24@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default ContactComponent;
