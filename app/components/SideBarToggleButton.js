import React from 'react';
import ReactDOM from 'react-dom';

export default class SideBarToggleButton extends React.Component {
	
	toggleSideBar() {
		alert("Toggle Sidebar");
	}
	
    render(){
       return( 
           <div>
              	<button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.toggleSideBar}>
					<i className="glyphicon glyphicon-align-left"></i>
							Toggle Sidebar 
				</button>
           </div>   
        )
     }
}
