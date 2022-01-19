import React from 'react';
import { Stack} from 'react-bootstrap';
import HabitSlide from './HabitSlide';
import {useHabits} from "../contexts/HabitTrackerContext"

export default function HabitsStack() {
    const {habits} = useHabits()

    return (
        <>
            <Stack gap={1}>
                {habits.map(habit => (
                    <HabitSlide
                    key =  {habit.id}
                    activityName={habit.activityName}
                    activityDescription={habit.habitDescription}
                    iconName={habit.iconName}
                    habitId = {habit.id}
                    
                    />

                ))
        
                }
                    
            </Stack>
        </>
    )
}
