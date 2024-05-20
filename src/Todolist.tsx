
import {Button} from "./Button";
import {ChangeEvent} from "react";
import {TaskType} from "./module/tasks-reducer/tasks-reducer";

type TodolistPropsType = {
	tasks: TaskType[]
	title: string
	removeTask: (todolistID: string, taskID: string) => void
	addTask: (title: string, todolistID: string) => void
	todolistID: string
}

export const Todolist = ({todolistID, tasks, title, removeTask, addTask}: TodolistPropsType) => {

	let filteredTasks = tasks

	const addTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {
		// addTask(e.currentTarget.value)
	}

	return (
		<div>
			<div>
				<h3>{title}</h3>
				<input type="text" onChange={addTaskHandler}/>
				<Button title={'+'}></Button>
			</div>
			{tasks.length === 0 
				? 'no tasks'
				: <ul>
					{filteredTasks.map(t => {

						const removeTaskHandler = () => {
							removeTask(todolistID, t.id)
						}

						return(
							<li key={t.id}>
								<input type="checkbox"/>
								<span>{t.title}</span>
								<Button onClick={removeTaskHandler} title={'x'}></Button>
							</li>
						)
					})}
				</ul> 
			}
		</div>
	)
}
