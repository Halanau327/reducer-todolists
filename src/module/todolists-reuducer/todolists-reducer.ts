import {v1} from "uuid";


type TodolistType = {
    id: string
    title: string
}


export const todolistsReducer = (state: TodolistType[], action: todolistsReducerActionsType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(t => t.id !== action.payload.todolistID)
        }

        case 'ADD-TODOLIST': {
            const newTodolist = {id: action.payload.todolistID, title: action.payload.title}
            return [newTodolist, ...state]
            // remember to add new array for tasks (think how u can do it)
        }

        case 'UPDATE-TODOLIST': {
            const title = action.payload.title
            return state.map(t => t.id === action.payload.todolistID ? {...t, title}: t)
        }

        default: {
            return state
        }
    }
}

type todolistsReducerActionsType = removeTodolistType | addTodolistType | updateTodolistType


export type removeTodolistType = {
    type: 'REMOVE-TODOLIST'
    payload: {
        todolistID: string
    }
}

export type addTodolistType = {
    type: 'ADD-TODOLIST'
    payload: {
        title: string
        todolistID: string
    }
}

type updateTodolistType = {
    type: 'UPDATE-TODOLIST'
    payload: {
        todolistID: string
        title: string
    }
}

export const removeTodolistAC = (todolistID: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistID
        }
    }  as const
}

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title,
            todolistID: v1()
        }
    }  as const
}

export const updateTodolistAC = (todolistID: string, title: string) => {
    return {
        type: 'UPDATE-TODOLIST',
        payload: {
            todolistID,
            title
        }
    }  as const
}



