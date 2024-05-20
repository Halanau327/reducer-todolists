

type TodolistType = {
    id: string
    title: string
}


export const todolistsReducer = (state: TodolistType[], action: todolistsReducerActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state
        }

        default: {
            return state
        }
    }
}

type todolistsReducerActionsType = removeTodolistType


type removeTodolistType = {
    type: 'REMOVE-TODOLIST'
    payload: {
        todolistID: string
    }
}

const removeTodolistAC = (todolistID: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistID
        }
    }  as const
}



