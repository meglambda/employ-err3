import React from 'react';


function Dropdown() {
	return (
		<form>
			<div className="form-check form-check-inline">
			  <label className="form-check-label">
			    <input className="form-check-input" type="checkbox" value="html" /> HTML5
			  </label>
			</div>
			<div className="form-check form-check-inline">
			  <label className="form-check-label">
			    <input className="form-check-input" type="checkbox" value="css" /> CSS3
			  </label>
			</div>
			<div className="form-check form-check-inline">
			  <label className="form-check-label">
			    <input className="form-check-input" type="checkbox" value="javascript" /> Javascript
			  </label>
			</div>
			<div className="form-check form-check-inline">
			  <label className="form-check-label">
			    <input className="form-check-input" type="checkbox" value="react" /> React
			  </label>
			</div>
			<div className="form-check form-check-inline">
			  <label className="form-check-label">
			    <input className="form-check-input" type="checkbox" value="Mongo" /> Mongo
			  </label>
			</div>
		</form>
	)
}


export default Dropdown;