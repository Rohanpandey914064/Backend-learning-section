import { Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import Home from "./Page/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
