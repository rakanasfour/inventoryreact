import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from"./pages/Home";
import About from"./pages/About";
import Nav from './components/Nav'
import DisplayInfo from "./pages/DisplayInfo";


function App() {
  return (
    <div>
     
  
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/displayinfo" element={<DisplayInfo></DisplayInfo>}></Route>
      </Routes>



    </Router>
   




    </div>
   
   
  );
}

export default App;
