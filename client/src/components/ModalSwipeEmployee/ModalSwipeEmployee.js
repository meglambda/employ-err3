import React from 'react';




function ModalSwipeEmployee() {
	return (
		<div className="modal fade" id="employeeModal" tabIndex="-1" role="dialog" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Mark Zuckerberg</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
			         <div className="modal-image">
			        	<img id="modal-image" src="https://seeklogo.com/images/F/facebook-logo-39A76724E4-seeklogo.com.png" style={{padding: "0", height: "100%", width: "100%"}} alt="Employee Modal"/>
			        	<div id="modal-text">
			        	<p>Ceo - Facebook</p>
			        	<p>Facebook knows everything about you</p>
			        </div>
		          </div>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default ModalSwipeEmployee;