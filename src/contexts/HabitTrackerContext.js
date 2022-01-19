import React, {useContext, useState} from "react"
import {v4 as uuid4} from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"


const HabitsContext = React.createContext()

export function useHabits() {
    return useContext(HabitsContext)

}


/* 
Habit object:

{
    id:
    dateOfCreation: 
    activityName:
    habitDescription:
    iconName:
    goalType: //for now only2 types: minutesTracking, wasDoneTracking(yes or no)
    minutesGoal: 
}


Activity object:

{
    id:
    dateOfDay:
    habitIdOfActivity:
    minutesDone:
}

*/

export const HabitsProvider =  ({children}) => {

    const [habits, setHabits] = useLocalStorage("habits", [])
    const [activities, setActivities] = useLocalStorage("activities", [])

    function addHabit({activityName, habitDescription, iconName, goalType, minutesGoal}) {
        const today = new Date();
        const splitterSimb = "-"
        const dateOfCreation = today.getFullYear()+splitterSimb+(today.getMonth()+1)+splitterSimb+today.getDate();
        
        setHabits(prevHabits => {
            if (prevHabits.find(habit => habit.activityName === activityName)) {
                return prevHabits /* si new habit que se quiere crear tiene el mismo nombre, no te deja TODO: agregar alerta */
            }
            return [...prevHabits, { id: uuid4(), dateOfCreation,  activityName, habitDescription, iconName, goalType, minutesGoal}]
        })
    }

    function deleteHabit(id) {
        setHabits(prevHabits => {
            return prevHabits.filter(habit => habit.id !== id)
        })
    }

    function changeActivityDoneValueByDate(date, habitId, value) {
    
        setActivities(prevActivities => {
            if (prevActivities.find(activity => activity.dateOfDay === date && activity.habitIdOfActivity === habitId)) {
                return [prevActivities.filter(activity => activity.dateOfDay !== date || activity.habitIdOfActivity !== habitId), {id: uuid4(), dateOfToday: {date}, habitIdOfActivity: {habitId}, minutesDoneToday: {value}}]
                    
                
            } else {
                let today = new Date();
                let splitterSimb = "-"
                let dateOfToday = today.getFullYear()+splitterSimb+(today.getMonth()+1)+splitterSimb+today.getDate();
                return [...prevActivities, {id: uuid4(), dateOfToday: {dateOfToday}, habitIdOfActivity: {habitId}, minutesDoneToday: {value}}]
            }
        })
    }

    function getHabitActivities (currentHabitId) {
        return activities.filter(activity => activity.habitIdOfActivity === currentHabitId)
    }


    return (<HabitsContext.Provider value = {{
        habits,
        addHabit,
        deleteHabit,
        activities,
        changeActivityDoneValueByDate,
        getHabitActivities
    }} >
        {children}
    </HabitsContext.Provider>)
}