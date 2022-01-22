import React, {useRef, useState} from 'react';
import { Form, Button, Modal, Dropdown } from 'react-bootstrap'
import {useHabits} from "../contexts/HabitTrackerContext"
import moment from "moment"

export default function AddTimeDoneModal({show, handleClose, defHabitId}) {
    const {habits, activities, changeActivityDoneValueByDate} = useHabits()

    const habitName = useRef(getCurrentHabitName(defHabitId))
    const minutesDone = useRef()
    const [currentDate, setCurrentDate] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        
        changeActivityDoneValueByDate({
            date: moment(currentDate).format("MM D YY"), 
            habitId: (habits.find(habit => habit.activityName === habitName.current.value)).id, 
            value: parseFloat(minutesDone.current.value)})

        handleClose()
    }

    function getCurrentHabitName (currentSelectedHabitId) {
        if (habits.find(habit => habit.id === currentSelectedHabitId)) {
            return (habits.find(habit => habit.id === currentSelectedHabitId).activityName)
        } else return {}
    }

    return (
        
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar tiempo dedicado</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label >Habito</Form.Label>
                        <Form.Control 
                        as="select" 
                        ref={habitName}
                        required>
                            {habits.map(habit => (
                                <option key={habit.id}>
                                    {habit.activityName}
                                    
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="duedate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" required name="duedate" placeholder="Due date" onChange={(e) => setCurrentDate(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="minutesDone">
                        <Form.Label>Minutos dedicados ese día</Form.Label>
                        <Form.Control ref={minutesDone} type="number" required min={0} step={1}></Form.Control>
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit">
                            Añadir
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
            
        </Modal>
        
    )
}
