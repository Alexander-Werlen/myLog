
import React, {useRef} from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import {useHabits} from "../contexts/HabitTrackerContext"


export default function AddHabitModal({show, handleClose}) {

    const nameRef = useRef()
    const descriptionRef = useRef()
    const minutesGoalRef = useRef()
    const {addHabit} = useHabits()

    function handleSubmit(e) {
        e.preventDefault()
        addHabit({
                activityName: nameRef.current.value,
                habitDescription: descriptionRef.current.value,
                iconName: "Book", //TODO select in form
                goalType: "minutesTracking",
                minutesGoal: parseFloat(minutesGoalRef.current.value),
                
            })
        handleClose()
    }
    return (
        
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Habito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control ref={nameRef} type="text" required placeholder="Introduce nombre del habito"></Form.Control>
                        <Form.Text className="text-muted">No se pueden crear más de dos habitos con el mismo nombre</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text"></Form.Control>
                        <Form.Text className="text-muted">(Opcional)</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="minutesGoal">
                        <Form.Label>Meta de minutos diarios</Form.Label>
                        <Form.Control ref={minutesGoalRef} type="number" required min={0} step={1}></Form.Control>
                        <Form.Text className="text-muted">Es la cantidad de tiempo que deseas dedicarle diariamente a la actividad</Form.Text>
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
