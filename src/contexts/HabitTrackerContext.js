import React, {useContext, useEffect} from "react"
import {v4 as uuid4} from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"
import moment from "moment"


const HabitsContext = React.createContext()

export function useHabits() {
    return useContext(HabitsContext)

}


/* 
Habit object:

{
    id:
    dateOfCreation: //Format is as follow: "01 29 22" osea MM D YY
    activityName:
    habitDescription:
    iconName:
    goalType: //for now only2 types: minutesTracking, wasDoneTracking(yes or no)
    minutesGoal: 
}


Activity object:

{
    id:
    habitIdOfActivity:
    dateOfDay:
    minutesDone:
}

*/

export const HabitsProvider =  ({children}) => {

    const [habits, setHabits] = useLocalStorage("habits", [])
    const [activities, setActivities] = useLocalStorage("activities", [])

    function createActivitiesUpToDate (habitId) {
        
        // Should be rewritten in a simpler and less convoluted way. This includes changing the date format with which the objects are stored.
        let startDate = (habits.find(habit => habit.id === habitId)).dateOfCreation
        let endDate = moment().format("MM D YY")

        let dates = [];

        let currDate = moment(startDate).subtract(1, 'days').startOf('day');
        let lastDate = moment(endDate).startOf('day');

        while(currDate.add(1, 'days').diff(lastDate) < 1) {
            
            dates.push(currDate.clone().format("MM D YY"));
        }


        for (let i = 0; i < dates.length; i++) {
            let currentDay = dates[i]
            

            if (!(activities.find(activity => activity.dateOfDay === currentDay && activity.habitIdOfActivity === habitId))) {
                
                setActivities(prevActivities => {
                    
                    return [...prevActivities, {id: uuid4(), dateOfDay: currentDay, habitIdOfActivity: habitId, minutesDone: 0}]
                    
                })
                
            }
        }

        
    }

    function addHabit({activityName, habitDescription, iconName, goalType, minutesGoal}) {
        
        
        let dateOfCreation = moment().format("MM D YY") //####Useeee
        
        setHabits(prevHabits => {
            if (prevHabits.find(habit => habit.activityName === activityName)) {
                return prevHabits /* si new habit que se quiere crear tiene el mismo nombre, no te deja TODO: agregar alerta */
            }
            return [...prevHabits, { id: uuid4(), dateOfCreation: dateOfCreation,  activityName, habitDescription, iconName, goalType, minutesGoal}]
        })
    }

    function deleteHabit(id) {
        setHabits(prevHabits => {
            return prevHabits.filter(habit => habit.id !== id)
        })
        setActivities(prevActivities => {
            return prevActivities.filter(activity => activity.habitIdOfActivity !== id)
        })
    }

    function changeActivityDoneValueByDate({date, habitId, value}) {
    
        setActivities(prevActivities => {
            if (prevActivities.find(activity => activity.dateOfDay === date && activity.habitIdOfActivity === habitId)) {
                console.log(prevActivities.filter(activity => activity.dateOfDay !== date || activity.habitIdOfActivity !== habitId))
                return [...prevActivities.filter(activity => activity.dateOfDay !== date || activity.habitIdOfActivity !== habitId), {id: uuid4(), dateOfDay: date, habitIdOfActivity: habitId, minutesDone: value}]
                
            } else {
                console.log("Error: Day not found")
                return [...prevActivities]
                // Si el día que se quiere modificar está afuera de los días preexistentes entre hoy y el día de creación del habito.
                //TODO: Add error alert
            } 
        })
    }

    function getHabitActivities (currentHabitId) {
        return activities.filter(activity => activity.habitIdOfActivity === currentHabitId)
    }
    
    useEffect(() => {
        habits.forEach(habit => {
            createActivitiesUpToDate(habit.id)
        })
    }, [habits]) /* Calling function every time habits changes (and also in first render), to update  */

    return (<HabitsContext.Provider value = {{
        habits,
        addHabit,
        deleteHabit,
        activities,
        changeActivityDoneValueByDate,
        getHabitActivities,
    }} >
        {children}
    </HabitsContext.Provider>)
}