import React, {useState} from 'react'
import { Card, Badge, Collapse, Button } from 'react-bootstrap'

export default function Job({ job }) {

    const [openDetail, setOpenDetail] = useState(false)
    const [openApply, setOpenApply] = useState(false)
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
                    </div>
                    <img 
                        style={{...styles.companyLogo}}
                        className='d-none d-md-block' 
                        alt={job.company} 
                        src={job.company_logo} 
                    />
                </div>
                
                {/* button to hide/show how to apply details  */}
                <Card.Text>
                    <Button
                        onClick={() => setOpenApply(openVal => !openVal)} 
                        variant='primary'
                        style={{...styles.dtlBtn, marginTop: 15}}
                    >
                        {
                            openApply 
                             ? 'Hide Appliction Details'
                             : 'How To Apply' 
                        }
                    </Button>
                </Card.Text>

                {/* details about how to apply */}
                <Collapse in={openApply}>
                    <div dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
                </Collapse>

                {/* button to hide/show how to job description  */}
                <Card.Text>
                    <Button
                        onClick={() => setOpenDetail(openVal => !openVal)} 
                        variant='primary'
                        style={{...styles.dtlBtn}}
                    >
                        {
                            openApply 
                            ? 'Hide Job Description'
                            : 'View Job Description' 
                        }
                    </Button>
                </Card.Text>

                {/* details about how to apply */}
                <Collapse in={openDetail}>
                    <div dangerouslySetInnerHTML={{__html: job.description}} />
                </Collapse>

            </Card.Body>
        </Card>
    )
}

const styles = {
    card: {
        backgroundColor: 'lightblue',
        marginBottom: 10,
    },
    cardBody: {

        backgroundColor: 'antiquewhite',
        margin: 10
    },
    dtlBtn: {
        color: 'white',
        backgroundColor: '#111',
        border: 'none'
    },
    mainInfo: {

    },
    descDiv: {
        marginTop: 5,
    },
    companyLogo: {
        borderRadius: 10,
        maxWidth: 200,
        maxHeight: 50
    },
    lightText: {
        fontWeight: 'lighter',
        color: 'grey'
    }
}
