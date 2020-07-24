import React from 'react'
import { Card } from 'react-bootstrap'

export default function Job({ job }) {
    return (
        <Card style={{...styles.card}}>
            <Card.Body style={{...styles.cardBody}}>
                {job.title} - <span style={{...styles.lightText}}>{job.company}</span>
            </Card.Body>

        </Card>
    )
}

const styles = {
    card: {
        backgroundColor: 'lightblue'
    },
    cardBody: {
        backgroundColor: 'antiquewhite',
        margin: 10
    },
    lightText: {
        fontWeight: 'lighter',
        color: 'grey'
    }
}
