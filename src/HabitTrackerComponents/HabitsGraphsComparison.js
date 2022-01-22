import React from 'react'
import {useHabits} from "../contexts/HabitTrackerContext"
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart} from 'recharts';

export default function HabitsGraphsComparison({daysToDraw}) {
    const {habits, activities} = useHabits()


    return (
        <LineChart width={600} height={300}>

        </LineChart>
        
    )
}
