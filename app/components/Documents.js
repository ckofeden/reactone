import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";

import RegistrationQueue from "./RegistrationQueue";
import GrantoreeIndexingQueue from "./GrantoreeIndexingQueue";
import LegalIndexingQueue from "./LegalIndexingQueue";
import SideBarToggleButton from "./SideBarToggleButton"

export default class Documents extends React.Component {
    render(){
       return( 
			<HashRouter>
				<div className="wrapper">
					<nav id="sidebar">
						<div className="sidebar-header">
							<h3>Work Queues</h3>
						</div>
						<ul className="list-unstyled components header">
							<li><NavLink to="/documents/registrationQueue">Registration</NavLink></li>
							<li><NavLink to="/documents/grantoreeIndexingQueue">Grantor/Grantee Indexing</NavLink></li>
							<li><NavLink to="/documents/legalIndexingQueue">Legal Indexing</NavLink></li>
						</ul>
					</nav>

					<div id="content" className="content">
						<SideBarToggleButton />
						<Route path="/documents/registrationQueue" component={RegistrationQueue}/>
						<Route path="/documents/grantoreeIndexingQueue" component={GrantoreeIndexingQueue}/>
						<Route path="/documents/legalIndexingQueue" component={LegalIndexingQueue}/>
					</div>

				</div>
			</HashRouter>			
			
        )
		   
    }
}




