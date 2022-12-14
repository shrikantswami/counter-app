import { Container, Paper, Box, Alert } from "@mui/material";
import React, {useState, useContext, useEffect, useRef } from "react";
// import { Form, Input } from '../../../../components/Form';
import Form from "../../../components/Forms/ResumeDataForm";
import Input from "../../../components/Forms/Input";
import AuthContext from "../Auth/AuthContext";

const NewAccount = () => {
    const [accesstoken, userDetails, refreshtoken, setAccessToken, setUserDetails , setRefreshToken,logedIn, setLogedIn] = useContext(AuthContext)
    const title = 'Create New Account';
    const mountedRef = useRef(true);
    const format = {
        hasError: false,
        error: null,
        value: null
    };
    const [firstName, setFirstName] = useState( format );
    const [lastName, setLastName] = useState( format );
    const [middleName, setMiddleName] = useState( format );
    const [emailAddress, setEmailAddress] = useState( format );
    const [password, setPassword] = useState( format );


    const [accountName, setAccountName] = useState({
        hasError: false,
        error: null,
        value: null
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const [inSubmit, setInSubmit] = useState(false);

    const [redirect, setRedirect] = useState(null);

    
    const handleSubmit = () => {
        console.log(' it came here ')
        let response =  fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
                },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          email: emailAddress,
          password: password,
            })
        }).then( response => {
            if (!response.ok) 
                console.log(" un successful")
            else  
                console.log("successful")  
        } );
        console.log('data posted')
        return response.ok;
          
        // return false;
    }
    return (
        <Container>
            <Paper>
                <Box p={2}>
                <div className="card-body">
                    <Form
                    handleSubmit = { handleSubmit }
                    // handleSubmit={e =>{
                    //     e.preventDefault();
                    //     setInSubmit(true);
                    //     setErrorMessage(null);
                    //     const createAccount = CloudFunctions.httpsCallable('createAccount');
                    //     createAccount({
                    //         accountName: accountName.value,
                    //     }).then(response => {
                    //         if (!mountedRef.current) return null 
                    //         const accountId = response.data.accountId;
                    //         setRedirect('/account/'+accountId+'/billing/plan');
                    //     }).catch(err => {
                    //         if (!mountedRef.current) return null 
                    //         setErrorMessage(err.message);
                    //         setInSubmit(false);
                    //     })
                    // }}
                    // disabled={accountName.hasError || accountName.value===null || inSubmit}
                    disabled = {logedIn}
                    inSubmit = {inSubmit}
                    enableDefaultButtons={true} >
                        <Input label="First Name" type="text" name="first-name" maxLen={50} required={true} changeHandler={setFirstName} fullWidth variant="outlined" />
                        <Input label="Last Name" type="text" name="last-name" maxLen={100} required={true} changeHandler={setLastName} fullWidth variant="outlined" />
                        <Input label="Middle Name" type="text" name="middle-name" maxLen={100} required={true} changeHandler={setMiddleName} fullWidth variant="outlined" />
                        <Input label="Email Address" type="text" name="email-address" maxLen={100} required={true} changeHandler={setEmailAddress} fullWidth variant="outlined" />
                        <Input label="Password" type="text" name="password" maxLen={100} required={true}  changeHandler={setPassword} fullWidth variant="outlined" /> 
                    </Form>
                </div>
                </Box>
            </Paper>
        </Container>
    )
};

export default NewAccount;