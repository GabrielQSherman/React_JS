import React from 'react'

import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
    return (
        <Form style={{...styles.form}}>
                <Form.Group style={{...styles.inputGroup}}>
                    <Form.Label>
                        Description
                    </Form.Label>
                    <Form.Control
                        name='description'
                        type='text'
                        value={params.description}
                        style={{...styles.inputCtrl}}
                        onChange={onParamChange}
                    />
                    <Form.Label>
                        Location
                    </Form.Label>
                    <Form.Control
                        name='location'
                        type='text'
                        value={params.location}
                        style={{...styles.inputCtrl}}
                        onChange={onParamChange}
                    />
                    <Form.Check
                        name='full_time'
                        label='Full Time'
                        type='checkbox'
                        value={params.full_time}
                        style={{...styles.inputCheck}}
                        onChange={onParamChange}
                    />
                </Form.Group>

        </Form>
    )
}

const styles = {
    form: {
        display: 'flex',
        backgroundColor: 'white',
        padding: '20px',
        marginBottom: '2%',
        borderRadius: 10,
        textAlign: 'center',
    },
    
    inputGroup: {
        display: 'flex',
        backgroundColor: '#9999',
        padding: '20px',
        marginBottom: '2%',
        borderRadius: 10,
        textAlign: 'center',
        width: '100%',
        justifyContent: 'spaceBetween 10',

    },
    inputCtrl : {
        margin: '0 10px'
    }
} 