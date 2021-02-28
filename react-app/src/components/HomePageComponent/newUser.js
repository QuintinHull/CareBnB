import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const NewUser = (props) => {
    const { show, setShow, setShowLogin, setShowSignUp } = props

    return (
        <div style={{ width: '70%', marginTop: '20px' }}>
            <Alert show={show} variant="success">
                <Alert.Heading>Welcome to CareBnb</Alert.Heading>
                <p>
                    Find your spot to stay at by logging in or signing up today!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShowLogin(true)} variant="outline-success">
                        Log in
                    </Button>
                    <Button onClick={() => setShowSignUp(true)} variant="outline-success">
                        Sign up
                    </Button>
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Dismiss
                    </Button>
                </div>
            </Alert>
        </div>
    );
};

export default NewUser