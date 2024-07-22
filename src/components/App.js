
import React from "react";
import './../styles/App.css';
import { useSelector,useDispatch } from "react-redux";
import {setname,setemail} from '../State/Slice1'
const App = () => {
  const name=useSelector((state)=>state.userinfo.name);
  console.log(name);
  const email=useSelector((state)=>state.userinfo.email);
  const dispatch=useDispatch();
  return (
    <div>

      <h1>
        User Information
      </h1>
      <label htmlFor="name">Name</label>
      <input onChange={(e)=>dispatch(setname(e.target.value))} value={name} id="name" type="text" placeholder="Name" /><br/>
      <label htmlFor="email">Email</label>
      <input onChange={(e)=>dispatch(setemail(e.target.value))} value={email} id="email" type="email" placeholder="Email" />
      <br/>
      <p>Current values in store:</p>
      <p className="output">
      Name - {name}<br/>
      Email - {email}
      </p>
     
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
