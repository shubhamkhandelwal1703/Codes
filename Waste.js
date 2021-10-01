import React from 'react';
import '../components/Drop.css';
import  '../components/Waste.css';
const  Waste = () => {

return (
    <>
    <div className="qq">
        <h1>Kitchen Waste</h1>
     <h4>Please fill all the texts in the fields.</h4>

    </div>
  
    <div className="ss" >
    <p>  Name: <input type="text" name="name" placeholder="Abishek verma" /></p>
    <p> Email: <input type="email" placeholder="Abhi@gmail.com"/></p>
    
    <p>
        Address*: <textarea name="address" id="address" cols="1" rows="1" required></textarea>
    </p>
    <p> Contact No.: <input type="number" placeholder="0123456789"/> </p>
    <p> Options : &nbsp;   &nbsp; 
        <select name="Kitchen Waste" id="Plastics" required>
        <option value="">--Select a Plastic--</option>
        <option value="Vegetable">Plastic bottle</option>
        <option value="Leet Food"> Mix Plastic</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Leet Food"> Packaging Plastic</option>
    </select>
    </p>
    
    <p> Quantity: &nbsp;  &nbsp; <input type="number" /> </p>    
    <p>Date for pickup :<input type="date" name="Select a date for pickup" id="Select a date for pickup" required /></p>


<input type="submit" value="Send"/>

</div>

   
</>
);
}

export default Waste;