import './App.css';
import {addTaskAC, removeTaskAC, tasksReducer} from "./module/tasks-reducer/tasks-reducer";
import {useReducer} from "react";
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import {todolistsReducer} from "./module/todolists-reuducer/todolists-reducer";


function App() {

	let todolistID1 = v1()
	let todolistID2 = v1()

	let [todolists, dispatchTodolists] = useReducer(todolistsReducer, [
		{id: todolistID1, title: 'What to learn'},
		{id: todolistID2, title: 'What to buy'},
	])

	let [tasks, dispatchTasks] = useReducer(tasksReducer, {
		[todolistID1]: [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS', isDone: true},
			{id: v1(), title: 'ReactJS', isDone: false},
		],
		[todolistID2]: [
			{id: v1(), title: 'Rest API', isDone: true},
			{id: v1(), title: 'GraphQL', isDone: false},
		],
	})

	const removeTask = (todolistID: string, taskID: string) => {
		dispatchTasks(removeTaskAC(todolistID, taskID))
	}

	const addTask = (title: string, todolistID: string) => {
		dispatchTasks(addTaskAC(title, todolistID))
	}



	return (
		<div className="App">
			{todolists.map(tl => {



				return(
					<Todolist
						key={tl.id}
						todolistID={tl.id}
						title={'What to learn'}
						tasks={tasks[tl.id]}
						removeTask={removeTask}
						addTask={addTask}

					/>
				)
			})}
		</div>
	);
}

export default App;
