import React from 'react';
import '../components/Drop.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Waste from './Waste';
const  Dropr = () => {

return (
	<Router>
	 
	  <div className="raj">
		 
	  <div className="sahil">
		  <a target ="_blank" href="./Waste.js">
 			<Link to="/Waste">Kitchen</Link></a>
			 </div>
		 <div className="sahil">
		 <a target ="_blank" href="./Waste.js">
 			<Link to="/Waste">Plastic</Link></a>
			 </div>
		 <div className="sahil">
 			<Link to="/Waste">Paper</Link>
			 </div>
 		 
		  
		 <div className="sahil">
 			<Link to="/Waste">Utensils</Link>
			 </div>
 		 
		  
		 <div className="sahil">
 			<Link to="/Waste">Medical Waste</Link>
			 </div>
			 <div className="sahil">
 			<Link to="/Waste">E-waste</Link>
			 </div>
 		 

		  
		 </div>
 		  
<Switch>
 		<Route exact path='/Waste' component={Waste}></Route>
 		</Switch>
		 {/* <Switch>
 		<Route exact path='/Waste' component={Waste}></Route>
 		</Switch><Switch>
 		<Route exact path='/Waste' component={Waste}></Route>
 		</Switch><Switch>
 		<Route exact path='/Waste' component={Waste}></Route>
 		</Switch><Switch>
 		<Route exact path='/Waste' component={Waste}></Route>
 		</Switch><Switch>
 		<Route exact path='/Waste' component={Waste}></Route>
 		</Switch> */}
	  
	  </Router>	 
);
}

export default Dropr;

