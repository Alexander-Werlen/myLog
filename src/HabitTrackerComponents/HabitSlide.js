import React, {useState} from 'react'
import { Button, Row, Col, Card} from 'react-bootstrap';
import * as Icons from "react-bootstrap-icons";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import DeleteHabitVerificationModal from './DeleteHabitVerificationModal';

export default function HabitSlide({activityName, activityDescription, iconName, habitId}) {
    
    /* Here the correct Icon is chosen. Maybe should have moved it to another file.
    There is always room for more Icons. Should have only imported the Icons that the user is actually allowed to use */
    const IconOfHabit = (iconName) => {
        
        
        switch (iconName.iconName) {
            case "Book":
                return <Icons.Book />
                
            case "Activity":
                return <Icons.Activity />
                
            case "Alarm":
                return <Icons.Alarm />
                
            case "Archive":
                return <Icons.Archive />
                
            case "Bag":
                return <Icons.Bag />
               
            case "Bandaid":
                return <Icons.Bandaid />
                
            case "Bank":
                return <Icons.Bank />
                
            case "Basket":
                return <Icons.Basket />
                
            case "Bar-chart":
                return <Icons.BarChart />
                
            case "Batery-charging":
                return <Icons.BatteryCharging />
                
            case "Bicycle":
                return <Icons.Bicycle />
                
            case "Boombox":
                return <Icons.Boombox />
                
            case "Tools":
                return <Icons.Tools />
                
            case "Mortarboard":
                return <Icons.Mortarboard />
                
            default:
                return <Icons.PatchQuestion />
                
        }
    }


    const [showDeleteHabitVerificationModal, setShowDeleteHabitVerificationModal] = useState(false)

    return (
        <>
            <Card >
                
                <CardHeader >
                    <Row>
                    <Col>
                    <IconOfHabit iconName={iconName} /> {activityName}  
                    </Col>
                    <Col xs={2}> {/* Aproach dudoso */}
                    <Button onClick={() => setShowDeleteHabitVerificationModal(true)} variant="outline-danger" size="sm"><Icons.Trash /></Button> 
                    </Col>
                    </Row>
                    
                </CardHeader> {/* TODO: Change Icons acording to activity */}
                <Card.Body>
                    <Row>
                    <Col>
                        <div>
                            {activityDescription}
                        </div>
                    </Col>

                    <Col>
                        <div className="d-grid gap-2">
                        <Button variant="outline-primary" size="sm"> {/* TODO: onclick */}
                            Realizado hoy
                        </Button>
                        <Button variant="outline-primary" size="sm">
                            Estadisticas
                        </Button>
                        </div>
                    </Col>

                    </Row>
                </Card.Body>
            </Card>
            <DeleteHabitVerificationModal show={showDeleteHabitVerificationModal} handleClose={() => setShowDeleteHabitVerificationModal(false)} habitId={habitId}/>
        </>
    )
}
