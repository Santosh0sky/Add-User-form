import React, {useState} from 'react';
import Card from '../UI/Card';
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [userInput, setUserInput] = useState({
        username : "",
        userage : "",
    });
    const [error, setError] = useState();

    const userNameEventHandler = (event) =>{
        setUserInput((prevState)=>{
            return({...prevState, username : event.target.value});
        });
    } 

    const userAgeEventHandler = (event) =>{
        setUserInput((prevState)=>{
            return({...prevState, userage : event.target.value});
        });
    } 
    

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(userInput.username.length === 0 && userInput.userage.length === 0){
            setError({title: "invalid Input",message: "Please enter a valid username and age (non-empty values)."});
            return;
        }
        if(userInput.userage < 1){
            setError({title: "invalid Input",message: "Please enter a valid age (> 0)."});
            return;
        }
        props.onAddUser(userInput.username,userInput.userage);
        setUserInput({
            username : "",
            userage : "",
        });
    }

    const errorHandler = () =>{
        setError(null);
    }


    return(
        <React.Fragment>
            {error && <ErrorModal title={error.title} message ={error.message} onConfirm = {errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userInput.username} onChange={userNameEventHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={userInput.userage} onChange={userAgeEventHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
  );
};

export default AddUser;