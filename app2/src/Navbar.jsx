import Dropdown from "./Dropdown"
import { useState } from "react"
function Navbar() {
  var [t,setT]=useState(false)
  var cli=()=>{setT(!t)}
  return (
    <div className="Navbar">
        <img src="/white-logo.png" alt="" />
        <ul>
            <li>Home</li>
            <li id="dropdown-contunier" onClick={cli}>Category{t?<Dropdown/>:null}</li>
            <li>Listing</li>
            <li>Contact Us</li>
            <li><button> Add Your Listing</button></li>
        </ul>
    </div>
  )
}
export default Navbar
