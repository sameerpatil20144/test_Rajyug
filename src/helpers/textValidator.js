/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React, { type ElementConfig } from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import {
    Form
} from 'react-bootstrap';
import Select, { components } from 'react-select';
import 'flatpickr/dist/themes/material_blue.css'
import Flatpickr from 'react-flatpickr'
import InputMask from "react-input-mask";

const DropdownIndicator = (
    props: ElementConfig<typeof components.DropdownIndicator>
) => {
    return (
        <components.DropdownIndicator {...props}>
            {props.selectProps.dropdownIcon}
        </components.DropdownIndicator>
    );
};


class TextValidator extends ValidatorComponent {

    render() {
        const { errorMessages, validatorListener, defaultdate, parentClass = '', id, dropdownIcon, ...rest } = this.props;

        const selectClass = this.props.as == 'select' ? ' type-select ' : '';

        const tableError = this.errorText() !== null ? ' table-error' : '';

        return (
            <div className={selectClass + parentClass + tableError} >
                {this.props.label && (
                    <Form.Label htmlFor={id && id} style={{ marginTop: '15px' }}>{this.props.label}</Form.Label>
                )}
                {
                    <Form.Control {...rest}
                        id={id}
                        ref={(r) => { this.input = r; }} />
                }
                <span>{this.props.postFix}</span>
                <div className="error-text">{this.errorText()}</div>
            </div>
        );
    }

    errorText() {
        const { isValid } = this.state;
        if (isValid) {
            return null;
        }
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export default TextValidator;