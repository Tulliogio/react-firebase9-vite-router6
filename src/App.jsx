import { Routes,Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  

  return (
    <>
      <h1>App</h1>
      <Navbar />
    <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>}></Route>
    </Routes>
      
   
    
    </>
  );
};

export default App;
