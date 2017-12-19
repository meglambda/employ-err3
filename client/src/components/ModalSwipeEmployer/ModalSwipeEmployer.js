import React from 'react';
import "./ModalSwipeEmployer.css"



function ModalSwipeEmployer(props) {
	return (
		<div className="modal fade" id="employerModal" tabIndex="-1" role="dialog" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="examplrModalLabel">Fred Lintz</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
			         <div className="modal-image">
			        	<img id="modal-image" src="https://upload.wikimedia.org/wikipedia/en/a/ae/RonSwanson.jpg" style={{padding: "0", height: "100%", width: "100%"}} />
			        	<div id="modal-text">
			        	<p>Full Stack Web Ninja</p>
			        	<p>Super chill, superfly, super coder</p>
			        	</div>
		          </div>
		        </div>	
		      </div>
		    </div>
		  </div>
		
	)
}

export default ModalSwipeEmployer;