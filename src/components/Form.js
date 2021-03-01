import { useState } from 'react';

export default function Form({ addTask }) {
    const [text, setText] = useState("");

    const updateText = (e) => {
        setText(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (text) {
            addTask({ text: text, isDone: false });
            setText('');
        }
    };

    return (
        <div className="task-add-form">
            <form>
                <input id="text" type="text" className="text-input" placeholder="Add a Task!" value={text} onChange={updateText}></input>
                <input type="submit" className="button" onClick={handleSubmit} value="Submit Task"/>         
            </form>
        </div>
    );
}
