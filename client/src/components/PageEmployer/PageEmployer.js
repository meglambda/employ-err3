import React, {Component} from 'react';
import ModalSwipeEmployer from '../ModalSwipeEmployer/ModalSwipeEmployer';
import Dropdown from '../Dropdown/Dropdown';
import Matches from '../Matches/Matches';
import Connections from '../Connections/Connections';
import ProfileEmployer from '../ProfileEmployer/ProfileEmployer';
import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';
import "./PageEmployer.css"
import axios from 'axios';



class PageEmployer extends Component {
	state = {
		matches: "",
		connections: ""
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: '/api/employees',
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
				  <ProfileEmployer />
				</div>

				<div className="container" id="main" style={{height: "auto", paddingTop: "75px"}}>
					<div className="row">
						<div className="col-md-8 text-center" style={{paddingTop: "5px"}}>
							<Dropdown />
						</div>
						<div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
							<button className="btn searchButt" data-toggle="modal" href='#employerModal'>SEARCH</button>
						</div>
					</div>
					<div className='row'>
						<div className="col-md-6">
							<Matches data={this.state.matches} toggle="modal" href='#employerModal'/>
						</div>
						<div className="col-md-6">
							<Connections data={this.state.matches} toggle="" href="mailto:"/>
						</div>
					</div>
					<br />
					<ModalSwipeEmployer data={this.state.matches}/>
				</div>
				<Footer />
			</div>
		)
	}
}




export default PageEmployer;



