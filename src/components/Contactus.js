import React,{ useState }  from 'react'
import "../assets/css/home.css"
import showpass from "../assets/img/showpass.svg"
import hidepass from "../assets/img/hidepass.svg"
const Contactus = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
       <section className="mt-5">
              <div className="banner center">
                  <div>
                  <h1 className="">Register To Get FREE Unit</h1>
                  </div>
                  
                </div>
 <div className="contactus container mt-4">
     <div className="center">
     <form class="col-lg-4 ">
    <p class=" black-text center" style={{fontSize:"var(--smaller-font-size)"}}>Please fill in Details to get started</p>
    
    <div class="form-group mt-3">
    <label class="formlabel black-text" for="formGroupExampleInput">FullName</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
  </div> 
  <div class="form-group mt-3">
    <label class="formlabel black-text" for="formGroupExampleInput">PhoneNo</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
  </div>  <div class="form-group mt-3">
    <label class="formlabel black-text" for="formGroupExampleInput">Email</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
  </div>  <div class="form-group pwd-container mt-3">
    <label class="formlabel black-text" for="formGroupExampleInput">Password</label>
    <input 
    className="form-control"
    name="pwd"
          placeholder=""
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}/>
    <img alt=""  title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidepass : showpass}
          onClick={() => setIsRevealPwd(prevState => !prevState)} />
    <p className="black-text" style={{fontSize:"8px",textAlign:"left"}}>Password should be a minimum of 8 characters</p>
  </div> 
  
   <div class="center mt-5">
     <button  class="btn-home btn-join bold-text" style={{padding:"10px 100px"}} >
     Register
     </button>
   </div>
   
  
  </form>
     </div>


   </div>
       </section>
    )
}

export default Contactus
