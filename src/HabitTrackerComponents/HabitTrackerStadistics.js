import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import 'react-calendar/dist/Calendar.css';
import HabitsGraphs from "./HabitsGraphs"
import HabitsGraphsComparison from "./HabitsGraphsComparison"


export default function HabitTrackerStadistics() {


    return (
        <>
            <Container>
                
                <Row>
                    <h2>Últimas 2 semanas:</h2>
                </Row>
                <Row>
                    <HabitsGraphs daysToDraw={14}></HabitsGraphs>
                </Row>
                <Row>
                    <HabitsGraphsComparison></HabitsGraphsComparison>
                </Row>
            </Container>

            
        
        </>
    )
}
