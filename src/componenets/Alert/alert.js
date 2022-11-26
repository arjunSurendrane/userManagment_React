
import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function AlerMessage(props) {
    return (
        <>
            <Alert variant='danger'>
                {props.error}!
            </Alert>
        </>
    )
}
