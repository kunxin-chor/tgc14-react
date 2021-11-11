import React from 'react';

import { useHistory } from 'react-router-dom';

export default function ContactUs() {

    // use the history hook from react-router-dom
    // inside the ContactUs component
    const history = useHistory();

    function submitForm() {
        history.push('/form-submitted');
    }

    return <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email"/>
            </div>
            <input type="button" onClick={submitForm} value="Contact Us"/>
        </div>
    </React.Fragment>
}