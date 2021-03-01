import { FaCheck, FaTrash } from 'react-icons/fa';

export default function Task({ task, taskAction }) {
    const { id, text, isDone } = task;
    
    const handleTaskAction = (e) => {
        taskAction(id)
    }

    return (
        <li className="list-item">
            <div>{text}</div>
            { isDone  ?
                <FaTrash className="icon delete" onClick={handleTaskAction}/> :
                <FaCheck className="icon checkmark" onClick={handleTaskAction}/>
            }
        </li>
    )
}
