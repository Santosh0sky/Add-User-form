import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
    <div>
      <AddUser />
    </div>
    <div>
      <UsersList users={[]}/>
    </div></div>
  );
}

export default App;