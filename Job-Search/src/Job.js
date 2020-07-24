import React from 'react'
import { Card, Badge } from 'react-bootstrap'

export default function Job({ job }) {

    return (
        <Card style={{...styles.card}}>
            <Card.Body style={{...styles.cardBody}}>
                <div className='justify-content-between d-flex'>
                    <div 
                        style={{...styles.mainInfo}}
                    >
                        <Card.Title>
                            {job.title} - <span style={{...styles.lightText}}>{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle
                            style={{...styles.lightText, marginBottom: 3}}
                        >
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge 
                            style={{marginRight: 3}}
                            variant='secondary'
                        >{job.type}</Badge>
                        <Badge variant='secondary'>{job.location}</Badge>
                        <div dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
                    </div>
                </div>
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
    mainInfo: {

    },
    lightText: {
        fontWeight: 'lighter',
        color: 'grey'
    }
}
