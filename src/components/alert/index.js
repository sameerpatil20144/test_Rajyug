/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertMsg = ({ variant, msg }) => {
    // const [show, setShow] = useState(false);

    // if(show){
    return (
        <Alert variant={variant}>
            {msg}
        </Alert>
    )
    // }else{
    // return null
    // }
}

export default AlertMsg;