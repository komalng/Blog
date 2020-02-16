import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import NavBar from './../layout/Navbar';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      email: "",
      password: "",
      errors: {}
    };
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
    const newuser={
      Username:this.state.Username,
      email: this.state.email,
      password: this.state.password
    }
    // console.log(user);
    axios.post('http://localhost:8000/register', 
 newuser
)
.then(function (response) {
  console.log(response);
  if(response.status=== 200){
    // this.props.history.push("/")
    
     window.location.href="/card"
  }
  else{
     console.log("twinkle")
   
  }
})
// .catch(function (error) {
//    console.log(error);
// });

 
    
 console.log(newuser);
  };
render() {
    const { errors } = this.state;
return (
  <div>
    <NavBar/>
      <div className="container" style = {{marginLeft:'30%'}}>
        <div  style={{ marginTop: "4rem" }} className="row" id="user-login">
          <div className="col s6 z-depth-6 card-panel">
           
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> 
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login" style = {{color:'#26a69a'}}>Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12 validate">
              <i className="mdi-social-person-outline prefix"> <i className="material-icons">person
</i>
</i>
                <input
                  onChange={this.onChange}
                  value={this.state.Username}
                  error={errors.Username}
                  id="Username"
                  type="text"
                  class="validate" 
                  required="" 
                  aria-required="true"
                />
                 
                <label htmlFor="name" >Name</label>
              </div>
              <div className="input-field col s12">
              <i className="mdi-social-person-outline prefix"> <i className="material-icons">email
</i>
</i>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  class="validate" 
                  required="" 
                  aria-required="true"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
              <i class="mdi-social-person-outline prefix"> <i class="material-icons">enhanced_encryption

</i></i>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password" 
                  class="validate" 
                  required="" 
                  aria-required="true"
                    
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                
                <button
                  style={{
                    backgroundColor: '#87CEEB',
                    width: "410px",
                    height:'50px',
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom:'1rem'
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable light-blue accent-3"
                  >
                 submit
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Register;