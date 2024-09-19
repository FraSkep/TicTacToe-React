import {useState} from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    function handleEditClick() {
        setIsEditing((editing) => !editing); //best practice in React per gestire l'update Scheduling
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    }

    return <li className={ isActive ? 'active' : null}>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit'}</button>
    </li>;
}
