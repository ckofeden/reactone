import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./ControlPanel";
import Contact from "./Documents";
import Torrens from "./Torrens";
import Inquiry from "./Inquiry";
import Fees from "./Fees";


export class TopNav extends React.Component {
    render(){
       return(
	   <HashRouter>
		<div className="col-md-12 navigationPillBar">
			<div className="navbar navbar-default" role="navigation">
				<nav className="collapse navbar-collapse contain" id="collapse">
					<ul className="nav nav-pills nav-justified">
						<li><a>Home</a></li>
						<li className="active"><a>Documents</a></li>
						<li><a>Fees</a></li>
						<li><a>Inquiry</a></li>
						<li><a>Reports</a></li>
						<li><a>Tax Liens</a></li>
						<li><a>Torrens</a></li>
						<li><a>Control Panel</a></li>
					</ul>
				</nav>
			</div>
		</div>
		 </HashRouter>
        )
     }
}




