import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import ControlPanel from "./ControlPanel";
import Documents from "./Documents";
import TaxLiens from "./TaxLiens";
import Torrens from "./Torrens";
import Inquiry from "./Inquiry";
import Fees from "./Fees";
import Reports from "./Reports";


export class Main extends React.Component {
    render(){
       return(
	   <HashRouter>
		<div className="col-md-12 navigationPillBar">
			<div className="navbar navbar-default" role="navigation">
				<nav className="collapse navbar-collapse contain" id="collapse">
					<ul className="nav nav-pills nav-justified header">
						<li><NavLink to="/home">Home</NavLink></li>
						<li><NavLink to="/documents">Documents</NavLink></li>
						<li><NavLink to="/fees">Fees</NavLink></li>
						<li><NavLink to="/inquiry">Inquiry</NavLink></li>
						<li><NavLink to="/reports">Reports</NavLink></li>
						<li><NavLink to="/taxLiens">Tax Liens</NavLink></li>
						<li><NavLink to="/torrens">Torrens</NavLink></li>
						<li><NavLink to="/controlPanel">Control Panel</NavLink></li>
					</ul>
					<div className="content">
						<Route path="/home" component={Home}/>
						<Route path="/documents" component={Documents}/>
						<Route path="/fees" component={Fees}/>
						<Route path="/inquiry" component={Inquiry}/>
						<Route path="/reports" component={Reports}/>
						<Route path="/taxLiens" component={TaxLiens}/>
						<Route path="/torrens" component={Torrens}/>
						<Route path="/controlPanel" component={ControlPanel}/>
					</div>
				</nav>
			</div>
		</div>
		 </HashRouter>
        )
     }
}
