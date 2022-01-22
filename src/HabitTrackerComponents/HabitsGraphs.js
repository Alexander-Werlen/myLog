import React from 'react'
import {useHabits} from "../contexts/HabitTrackerContext"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import moment from "moment"

export default function HabitsGraphs() {
    const {habits, activities} = useHabits()


    return (

        <>
        
        {/* {
            habits.map(habit => {
                
                
                return (
                    <LineChart key={habit.id} width={600} height={300} data={activities.filter(activity => activity.habitIdOfActivity === habit.id)}>
                        <Line type="monotone" dataKey="minutesDone" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="dateOfDay" />
                        <YAxis />
                    </LineChart>
                    )
            }
                
            )
        } */}
        <h1>Hola</h1>

        </>
    )
}
