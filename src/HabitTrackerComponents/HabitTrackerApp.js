import React, {useState} from 'react'
import HabitsStack from './HabitsStack'
import { Row, Col, Button } from 'react-bootstrap'
import {HabitsProvider} from "../contexts/HabitTrackerContext"
import AddHabitModal from "./AddHabitModal"
import AddTimeDoneModal from "./AddTimeDoneModal"
import HabitTrackerStadistics from "./HabitTrackerStadistics"



export default function HabitTrackerApp() {
    

    
    const [showAddHabitModal, setShowAddHabitModal] = useState(false)
    const [showAddTimeDoneModal, setShowAddTimeDoneModal] = useState(false)



    return (
        <>
            <HabitsProvider>
                
            <Row>
                <Col>
                    <Row>
                        <Col >
                            <h2>LISTA DE HABITOS</h2>
                        </Col>
                        <Col xs={2}>
                            <Button onClick={() => setShowAddHabitModal(true)} variant="primary">Añadir Habito</Button>
                        </Col>
                        <Col xs={2}>
                            <Button onClick={() => setShowAddTimeDoneModal(true)} variant="primary">Añadir Actividad</Button>
                        </Col>
                    </Row>
                    
                    <HabitsStack />
                </Col> {/* Habbits and tickmarcks */}
                <Col>
                    <HabitTrackerStadistics />
                </Col> {/* Grafics and full calendar */}
                
            </Row>

            <AddHabitModal show={showAddHabitModal} handleClose={() => setShowAddHabitModal(false)}></AddHabitModal>
            <AddTimeDoneModal show={showAddTimeDoneModal} handleClose={() => setShowAddTimeDoneModal(false)}></AddTimeDoneModal>
            </HabitsProvider>
            

        </>
    )
}
