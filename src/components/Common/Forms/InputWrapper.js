import React, { Component } from 'react';
import cn from 'classnames';
import { Form, Label } from 'semantic-ui-react'

export default class InputWrapper extends Component {

    render() {
        const errors = this.props.error;

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field error={errors} >
                        {this.props.label && <label>{this.props.label}</label>}
                        {this.props.children}
                        {errors &&
                        <Label basic color='red' pointing>{errors[0] && errors[0].message}</Label>
                        }
                    </Form.Field>
                </Form.Group>
            </Form>
        );
    }
}