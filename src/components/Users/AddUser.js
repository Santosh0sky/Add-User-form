import React, {useState} from 'react';
import Card from '../UI/Card';
import "./AddUser.css";
import Button from "../UI/Button";

const AddUser = () => {
    const [userInput, setUserInput] = useState({
        username : "",
        userage : "",
    });

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
        if(userInput.username.length != 0 && userInput.userage.length != 0 && userInput.userage > 0 ){
            console.log(userInput.username, userInput.userage);
        }
        setUserInput({
            username : "",
            userage : "",
        });
    }

    return(
            <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={userInput.username} onChange={userNameEventHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={userInput.userage} onChange={userAgeEventHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;