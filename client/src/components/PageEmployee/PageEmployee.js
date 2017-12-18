import React, {Component} from 'react';
import ModalSwipeEmployee from '../ModalSwipeEmployee/ModalSwipeEmployee';
import Matches from '../Matches/Matches';
import Connections from '../Connections/Connections';
import ProfileEmployee from '../ProfileEmployee/ProfileEmployee';
import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';
import "./PageEmployee.css";
import axios from 'axios';



class PageEmployee extends Component {
	state = {
		matches: [],
		connections: []
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: '/api/cities',
			responseType: 'json'})
		.then(res => this.setState({matches: res.data}))
	}

	openNav = () => {
		document.getElementById("mySidenav").style.width = "450px";
	}

	closeNav = () => {
		document.getElementById("mySidenav").style.width = "0px";
	}

	render () {
		return (
			<div>
				<Navigator openNav={this.openNav} none='none'/>
				<div id="mySidenav" className="sidenav" style={{zIndex: "2000"}}>
				  <a className="closebtn" onClick={() => this.closeNav()}>&times;</a>
				  <ProfileEmployee />
				</div>

				<div className="container" id="main" style={{height: "auto", paddingTop: "75px"}}>
					<br />
					<div className='row'>
						<div className="col-md-6">
							<Matches data={this.state.matches} toggle="modal" href='#employeeModal'/>
						</div>
						<div className="col-md-6">
							<Connections data={this.state.matches} toggle="" href="mailto:"/>
						</div>
					</div>
					<br />
					<ModalSwipeEmployee data={this.state.matches}/>
				</div>
				<Footer />
			</div>
		)
	}
}




export default PageEmployee;





