import Task from './Task';

export default function TaskLists({ tasks, checkTask, deleteTask }) {
    const activeTasks = tasks.filter((task) => !task.isDone);
    const completedTasks = tasks.filter((task) => task.isDone);


    return (
        <div className="task-lists-container">
            <div>
                <h3>Active Tasks</h3>
                <ul className="active-tasks">
                    {activeTasks.map(task => <Task key={task.id} task={task} taskAction={checkTask} /> )}
                </ul>
            </div>

            <div>
                <h3>Completed Tasks</h3>
                <ul className="completed-tasks">
                    {completedTasks.map(task => <Task key={task.id} task={task} taskAction={deleteTask} /> )}
                </ul>
            </div>
        </div>
    )
}
