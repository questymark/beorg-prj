import React from 'react';
import { Button } from 'semantic-ui-react'

export function SubmitButton(props) {
    return (
        <Button
            fluid
            primary
            type='submit'
            loading={props.loading}
            disabled={props.loading}
        >
            {props.children}
        </Button>
    )
}