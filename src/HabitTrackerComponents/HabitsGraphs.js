import React from 'react'
import {useHabits} from "../contexts/HabitTrackerContext"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import moment from "moment"

export default function HabitsGraphs() {
    const {habits, activities, createActivitiesUpToDate} = useHabits()


    return (

        <>
        
        {
            habits.map(habit => {
                
                
                return (
                    <h1 key={habit.id} >Graph of {habit.activityName}</h1>
                    )
            }
                
            )
        }

        </>
    )
}
