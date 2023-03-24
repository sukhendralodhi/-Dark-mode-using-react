import Navigation from "./Navigation";
import React, {useState} from "react";

export default function App() {
  const [mode, setMode] = useState('white');
    const [textcolor, setTextcolor] = useState('black');
    const [btntext, setBtnText] = useState('Dark');


    const toggleMode = () =>{
        if(mode === 'white') {
            setMode('gray');
            setTextcolor('white');
            setBtnText('White');
        } else {
            setMode('white');
            setTextcolor('black');
            setBtnText('Dark');
        }
    }
  return (
    <div className={`bg-${mode}-600 w-full h-screen`}>
        <Navigation mode = {mode} textcolor = {textcolor} btntext = {btntext} toggleMode = {toggleMode} />
    </div>
  )
}
