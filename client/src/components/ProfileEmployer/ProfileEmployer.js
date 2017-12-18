import React from 'react';
import '../../css/creative.min.css';
import '../../vendor/magnific-popup/magnific-popup.css';
import '../../css/style.css';

class ProfileEmployer extends React.Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12" >
            <div className="card" style={{justifyContent: 'center', alignItems: 'center',}}>
              <div className="card-body" >
                <div className="row" style={{justifyContent: 'center', alignItems: 'center',}}>
                  <div className="col-8 col-lg-8 col-md-6" style={{justifyContent: 'center', alignItems: 'center',}}>
                     <h3 className="color-blue index-1 no-m pt-4" style={{justifyContent: 'center', alignItems: 'center',}}>Kip Dynamite</h3>
                     <br/>
                     <img className="rounded-circle" src={require("../../img/kip.jpg")} style={{height:"250px", width:"250px"}} alt="..."/>
                    <br/>
                  </div>
                  <div className="card-block pt-4 text-center">
                    <h3 className="color-primary">Bio</h3>
                    <p>Rock Star, Deep Thinker, Lover of La-Fawnduh..</p>
                     <hr/>
        				<div className="input-group input-group-sm">
        				 {/*<span class="input-group-addon" id="basic-addon1">Title</span>*/}
        				  <input type="text" className="form-control  text-center" placeholder="Amazon Recruiter" aria-label="email-address" aria-describedby="sizing-addon2"/>
        				 </div>
                     	 <div className="input-group input-group-sm">
                        	{/*<span class="input-group-addon" id="basic-addon1">Email</span>*/}
                        	<input type="text" className="form-control  text-center" placeholder="kip.dynamite@gmail.com" aria-label="email-address" aria-describedby="sizing-addon2"/>
                      	</div>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>
       </div>
    );
  }
};


export default ProfileEmployer;