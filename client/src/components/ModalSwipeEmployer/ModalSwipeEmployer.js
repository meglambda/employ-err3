import React from 'react';




function ModalSwipeEmployer(props) {
	return (
		<div className="modal fade" id="employerModal" tabIndex="-1" role="dialog" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        Employer Modal Shiz goes here...
		      </div>
		    </div>
		  </div>
		</div>
	)
}




export default ModalSwipeEmployer;