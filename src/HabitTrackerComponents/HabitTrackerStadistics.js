import React, {useState} from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import HabitsGraphs from "./HabitsGraphs"
import {useHabits} from "../contexts/HabitTrackerContext"


export default function HabitTrackerStadistics() {
    
    const {habits} = useHabits()
    const [currentSelectedHabitId, setCurrentSelectedHabitId] = useState("")

    function getCurrentHabitName () {
        if (habits.find(habit => habit.id === currentSelectedHabitId)) {
            return (habits.find(habit => habit.id === currentSelectedHabitId).activityName)
        } else return "Select Habit"
    }


    function handleSelection (e) {

        setCurrentSelectedHabitId(e) //Updating selected habit Id

    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={5}>
                    <h3>CALENDAR OF</h3>
                    </Col>
                    <Col>
                    <Dropdown onSelect={(e) => handleSelection(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {getCurrentHabitName()}
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        {habits.map(habit => (
                            <Dropdown.Item key={habit.id} eventKey={habit.id}>
                                {habit.activityName}
                                
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                </Row>
                <Row>
                    <Calendar onClickDay={(value, e) => console.log("Clicked day: "+value)}/>
                </Row>
                <Row>
                    <h2>Last 30 days of habit</h2>
                </Row>
                <Row>
                    <HabitsGraphs></HabitsGraphs>
                </Row>
            </Container>

            
        
        </>
    )
}
