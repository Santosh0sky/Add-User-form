import React from 'react';
import Card from '../UI/Card';

const AddUser = () => {

    const addUserHandler = (event) =>{
        event.preventDefault();
    }

    return(
        <Card className='input'>
        <form onSubmit={addUserHandler}>
            <div>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type ="text" id = "username"/>
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input type ="number" id = "age"/>
                </div>
            <button type="submit">Add User</button>
            </div>
        </form>
        </Card>
    );

}

export default AddUser;