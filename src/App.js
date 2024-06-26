import React,{useState, Fragment} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
}

  return (
    <Fragment>{/* wecan use <React.Fragment> diractly or <></> to empty tag*/}
    <div>
      <AddUser onAddUser = {addUserHandler}/>
    </div>
    <div>
      <UsersList users={usersList}/>
    </div>
    </Fragment>
  );
}

export default App;