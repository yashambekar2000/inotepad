import React,{useState} from 'react'
import './css/Login_Signup.css'
import {Link, useHistory} from "react-router-dom";

const Login_Signup = (props) => {

    const [credentials, setCredentials] = useState({email:"" , password: ""});
    let history = useHistory();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
             
            },
           body: JSON.stringify({email: credentials.email , password: credentials.password})

          });
          const json =await response.json();
          console.log(json);
          if(json.success){
            //** Save the auth token and redirect to home page */
            localStorage.setItem('token',json.authToken);
            history.push("/");
            props.showAlert("Loged In Successfull","success");
          }else{
            props.showAlert("Invalid Credentials..","danger");
          }
    }

    const onChange = (e)=>{
        //**********there is what in value of input changes then that is in state also changes ******** */
    setCredentials({...credentials,[e.target.name]: e.target.value})
      }


  return (
    <>
    <div className='loginSignup'>
        <form action="" onSubmit={handleSubmit}>
     <label className="loginLabel" htmlFor="email">Email</label><br />
     <input className='loginInput' type="email" name='email' onChange={onChange}  value={credentials.email}/>
<br />
     <label  className="loginLabel" htmlFor="password">Password</label><br />
     <input className='loginInput' type="password" name='password' onChange={onChange} value={credentials.password} />
<br />
    <button className='loginbtn' >Login</button>
     </form>
     <div className='registerancr'>
        <Link to="/signup" className='ancrsignup'>Register Here</Link>
     </div>
    </div>
    </>
  )
}

export default Login_Signup
