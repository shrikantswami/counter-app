import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import { Button } from "@mui/material";
import ButtonRow from "./ButtonRow";

const Form = (props) => {
    const history = useNavigate();

    const {
        handleSubmit,
        disabled,
        inSubmit,
        enableDefaultButtons,
        submitBtnStyle,
        submitBtnText,
        backBtnText,
        backToUrl,
        children,
        ...others} = props;

    let btnClass = "primary";
    if(submitBtnStyle){
        btnClass = submitBtnStyle;
    }

    return (
        <form {...others} onSubmit={(e) => e.preventDefault()}> 
            <div>
                    <label htmlFor="email">First Name</label>
                    <input type="text" name="First_Name" />
            </div>
            {children}
            {enableDefaultButtons && 
                <ButtonRow>
                    <Button variant="contained" color={btnClass} disabled={disabled} onClick={handleSubmit}>
                        {inSubmit && 
                            <Loader />
                        }
                        {submitBtnText || 'Submit'}
                    </Button>
                    {backToUrl && backToUrl !== "" &&
                        <Button variant="contained" color="secondary" disabled={inSubmit} onClick={(e) => {
                            e.preventDefault();
                            history.push(backToUrl);
                        }}>
                            {backBtnText || 'Back'}
                        </Button>
                    }
                </ButtonRow>
            }
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    inSubmit: PropTypes.bool,
    enableDefaultButtons: PropTypes.bool,
    submitBtnText: PropTypes.string,
    backBtnText: PropTypes.string,
    backToUrl: PropTypes.string
}

export default Form;

// const ProfileForm = () => {
//     return (
//             <form method="post" action="events">
                
//                 <div>
//                     <label htmlFor="email">First Name</label>
//                     <input type="text" name="First_Name" />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Middle Name</label>
//                     <input type="text" name="Middle_Name" />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Last Name</label>
//                     <input type="text" name="Last_Name" />
//                 </div>
                
//                 <div>
//                     <label htmlFor="email">Mobile Number</label>
//                     <input type="integer" name="Mobile_Number" />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Visible Name </label>
//                     <input type="text" name="Display_Name" />
//                 </div>
                
//                 <div >
//                     <label htmlFor="email">Email address</label>
//                     <input type="email"  name="email" />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//     );
// }

// export default ProfileForm;