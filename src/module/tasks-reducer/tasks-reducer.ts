import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TaskStateType = {
    [key:string]: TaskType[]
}



export const tasksReducer = (state: TaskStateType, action: tasksReducerActionsType): TaskStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            // return state.filter(t => t.id !== action.payload.id)
            const todolistID = action.payload.todolistID
            return {...state, [todolistID]: state[todolistID].filter(t => t.id !== action.payload.taskID) }
        }

        case 'ADD-TASK': {
            const newTask = {id: v1(),title: action.payload.title, isDone: false}
            const todolistID = action.payload.todolistID
            return {...state, [todolistID]: [...state[todolistID], newTask] }
        }

        case 'UPDATE-TASK': {
            const todolistID = action.payload.todolistID
            const title = action.payload.title
            return {...state, [todolistID]: state[todolistID].map(t => t.id === action.payload.taskID ? {...t, title}: t)}
        }

        case 'CHANGE-TASK-STATUS': {
            const todolistID = action.payload.todolistID
            return {...state, [todolistID]: state[todolistID].map(t => t.id === action.payload.taskID ? {...t, isDone: action.payload.taskStatus }: t) }
        }

        default: {
            return state
        }
    }
}

type tasksReducerActionsType = removeTaskACType | addTaskACType | updateTaskACType | changeTaskStatus

type removeTaskACType = {
    type: 'REMOVE-TASK'
    payload: {
        todolistID: string
        taskID: string
    }
}

type addTaskACType = {
    type: 'ADD-TASK'
    payload: {
        todolistID: string
        title: string
    }
}

type updateTaskACType = {
    type: 'UPDATE-TASK'
    payload: {
        todolistID: string
        taskID: string
        title: string
    }
}

type changeTaskStatus = {
    type: 'CHANGE-TASK-STATUS',
    payload: {
        todolistID: string
        taskID: string
        taskStatus: boolean
    }
}


export const removeTaskAC = (todolistID: string,taskID: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            todolistID,
            taskID
        }
    } as const
}

export const addTaskAC = (title: string, todolistID: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title,
            todolistID
        }
    } as const
}

export const updateTaskAC = (todolistID: string, taskID: string, title: string) => {
    return {
        type: 'UPDATE-TASK',
        payload: {
            todolistID,
            taskID,
            title
        }
    } as const
}

export const changeTaskStatus = (todolistID: string, taskID: string, taskStatus: boolean) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        payload: {
            todolistID,
            taskID,
            taskStatus
        }
    } as const
}