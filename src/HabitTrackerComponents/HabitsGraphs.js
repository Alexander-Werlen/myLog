import React from 'react'
import {useHabits} from "../contexts/HabitTrackerContext"
import { ReferenceLine, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from 'recharts';

export default function HabitsGraphs({daysToDraw}) {
    const {habits, activities} = useHabits()


    return (

        <>
        
        {
            habits.map(habit => {
                let data = (activities.filter(activity => activity.habitIdOfActivity === habit.id).sort(function (a, b) {return new Date(a.dateOfDay).getTime() - new Date(b.dateOfDay).getTime()}))
                data = data.slice(Math.max(data.length - daysToDraw, 0))
                
                return (
                    <BarChart  key={habit.id} width={600} height={300} data={data}>
                        <Bar name={habit.activityName} dataKey="minutesDone" fill="#82ca9d" />
                        <ReferenceLine y={habit.minutesGoal} label="Meta diaria" stroke="red" strokeDasharray="3 3" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <XAxis  />
                        <YAxis />
                    </BarChart >
                    )
            }
                
            )
        }
        

        </>
    )
}
