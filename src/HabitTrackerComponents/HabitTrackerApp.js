import React, {useState} from 'react'
import HabitsStack from './HabitsStack'
import { Row, Col, Button } from 'react-bootstrap'
import {HabitsProvider} from "../contexts/HabitTrackerContext"
import AddHabitModal from "./AddHabitModal"
import HabitTrackerStadistics from "./HabitTrackerStadistics"


export default function HabitTrackerApp() {
    

    
    const [showAddHabitModal, setShowAddHabitModal] = useState(false)



    return (
        <>
            <HabitsProvider>
                
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h2>HABITS</h2>
                        </Col>
                        <Col xs={3}>
                            <Button onClick={() => setShowAddHabitModal(true)} variant="primary">Add Habit</Button>
                        </Col>
                    </Row>
                    
                    <HabitsStack />
                </Col> {/* Habbits and tickmarcks */}
                <Col>
                    <HabitTrackerStadistics />
                </Col> {/* Grafics and full calendar */}
                
            </Row>

            <AddHabitModal show={showAddHabitModal} handleClose={() => setShowAddHabitModal(false)}></AddHabitModal>
            
            </HabitsProvider>
            

        </>
    )
}
