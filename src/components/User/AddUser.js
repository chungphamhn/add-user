import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import style from './AddUser.module.css';

const AddUser = (props) => {

    const [usernameInput, setUsernameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (usernameInput.trim().length === 0 ||
            ageInput.trim().length === 0) {
            props.onSetError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+ageInput < 1) {
            props.onSetError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(usernameInput, ageInput);
        setUsernameInput('');
        setAgeInput('');
    };

    const usernameHandler = (event) => {
        setUsernameInput(event.target.value);
    };

    const ageHandler = event => {
        setAgeInput(event.target.value);
    };

    return (
        <Card className={style.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={usernameInput}
                    onChange={usernameHandler}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={ageInput}
                    onChange={ageHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>

    );
};

export default AddUser;