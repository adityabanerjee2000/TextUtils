import './App.css';
import Navbar from './components/Navbar';
// import Body from './components/Body';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react'   
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // Whether Dark Mode In Enabled Or Not
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleMode = () =>{
    if (mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled","success");
      let element = document.getElementById('modeTextToggle');
      element.innerText = 'Enable Light Mode';
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
        
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled","success");
      let element = document.getElementById('modeTextToggle');
      element.innerText = 'Enable Dark Mode';
    
      // document.title = "TextUtils - Light Mode";
    }
  }
  
  return (
    <>
<BrowserRouter>
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container m-3" id="heading">
<Routes>
      
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert = {showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
          
</Routes>

{/* <About/> */}
</div>
</BrowserRouter>
    </>
  );
}

export default App;






// This Type Of Code Is Written Inside The Function App() and Outside The return
  // const element = <h1>Here We Learn About JSX</h1>;
  // let a = "Aditya";
  // let b = "3rd Year";
  // let c = prompt("Enter Your Roll");
  // let c = 3;

{/* <Navbar/>*/}
{/* This Is Navbar Component */}

{/* <Body a=" Aditya Banerjee" b =" 3rd Year" c =" 23000119011"/> */}
{/* This Is Body Component */}
