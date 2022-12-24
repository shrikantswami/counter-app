import { Container, Paper, Box, Alert } from "@mui/material";
import React, {useState, useContext, useEffect, useRef } from "react";
// import { Form, Input } from '../../../../components/Form';
import Form from "../../../components/Forms/ResumeDataForm";
import Input from "../../../components/Forms/Input";

const LogIn = () => {
    const title = 'LogIn';
    const mountedRef = useRef(true);
    const format = {
        hasError: false,
        error: null,
        value: null
    };
    const [userName, setUserName] = useState( format );
    const [emailAddress, setEmailAddress] = useState( format );
    const [passWord, setPassword] = useState( format );


    const [accountName, setAccountName] = useState({
        hasError: false,
        error: null,
        value: null
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const [inSubmit, setInSubmit] = useState(false);

    const [redirect, setRedirect] = useState(null);

    
    const handleSubmit =  () => {
        console.log(' came for login ')
        let response =  fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
                },
        body: JSON.stringify({
          username: userName,
          password: passWord,
            })
        }).then( response => {
            if (!response.ok) 
                console.log(" un successful")
            else  
                console.log("successful")
                console.log(response)  
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
                    disabled = {false}
                    inSubmit = {inSubmit}
                    enableDefaultButtons={true} >
                        <Input label="Username" type="text" name="username" maxLen={100} required={true} changeHandler={setUserName} fullWidth variant="outlined" />
                        <Input label="Password" type="text" name="password" maxLen={100} required={true}  changeHandler={setPassword} fullWidth variant="outlined" /> 
                    </Form>
                </div>
                </Box>
            </Paper>
        </Container>
    )
};

export default LogIn;