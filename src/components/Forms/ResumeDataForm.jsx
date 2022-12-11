import React from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';
// import { Button } from "@mui/material";
// import ButtonRow from "./ButtonRow";
// import { Form } from "react-router-dom";

const ProfileForm = () => {
    return (
            <form method="post" action="events">
                
                <div>
                    <label htmlFor="email">First Name</label>
                    <input type="text" name="First_Name" />
                </div>
                <div>
                    <label htmlFor="email">Middle Name</label>
                    <input type="text" name="Middle_Name" />
                </div>
                <div>
                    <label htmlFor="email">Last Name</label>
                    <input type="text" name="Last_Name" />
                </div>
                
                <div>
                    <label htmlFor="email">Mobile Number</label>
                    <input type="integer" name="Mobile_Number" />
                </div>
                <div>
                    <label htmlFor="email">Visible Name </label>
                    <input type="text" name="Display_Name" />
                </div>
                
                <div >
                    <label htmlFor="email">Email address</label>
                    <input type="email"  name="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
    );
}

export default ProfileForm;