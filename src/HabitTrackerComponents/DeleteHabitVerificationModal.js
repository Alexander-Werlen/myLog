import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {useHabits} from "../contexts/HabitTrackerContext"

export default function DeleteHabitVerificationModal({show, handleClose, habitId}) {
    const {deleteHabit} = useHabits()

    function followProcess() {
        console.log("Deleting: " + habitId)

        deleteHabit(habitId)

        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Seguro que quieres eliminar este habito?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Se borrará todo el progreso que se tenga guardado</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleClose()} variant="outline-secondary">NO</Button>
                <Button onClick={() => followProcess()} variant="outline-danger">YES</Button>
            </Modal.Footer>
        </Modal>
    )
}
