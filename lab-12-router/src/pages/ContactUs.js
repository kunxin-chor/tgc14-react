import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function ContactUs() {

    // use the navigate hook from react-router-dom
    // inside the ContactUs component
    const navigate = useNavigate();

    // 1. useState takes in one argument, which is the default value of the
    // state variable

    // 2. useState returns an array of two elements
    // --> element 1: is the current value of the state variable
    // --> element 2: a function that is used to change the state variale
    const [formState, setFormState] = useState({
        'fullname': '',
        'email': ''
    })

    const updateFormField = (e) => {

        // to update an existing object in react:

        // 1. clone the object
        let clone = {...formState};

        // 2. make the change
        clone[e.target.name] = e.target.value;

        // 3. set back the state
        setFormState(clone);

        // setFormState({
        //     ...formState,
        //     [e.target.name] : e.target.value
        // })
    }

    function submitForm() {
        navigate('/form-submitted',{
            'state': {
                'formData':formState
            }
        });
    }

    return <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={formState.fullname}
                 onChange={updateFormField}
                />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={formState.email}
                 onChange={updateFormField}
                />
            </div>
            <input type="button" onClick={submitForm} value="Contact Us" />
        </div>
    </React.Fragment>
}