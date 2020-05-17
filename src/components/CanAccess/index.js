/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Redirect } from 'react-router-dom';
const CanAccess = ({ rights, children = '' }) => {
    const rightsArray = JSON.parse(localStorage.getItem('rights'));
    if (rightsArray.length > 0) {
        const isAccessible = rightsArray.findIndex((x => x.rights === rights));
        if (isAccessible >= 0) {
            return children
        } else {
            return null
        }
    } else {
        return null
    }
}

export default CanAccess

