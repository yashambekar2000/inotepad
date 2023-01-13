import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import './css/Signup.css'
const Signup = (props) => {

    const [credentials, setCredentials] = useState({name:"" ,mobile:"" , email:"" , password: "" , cpassword:""});
    let history = useHistory();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name , email ,mobile , password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
             
            },
           body: JSON.stringify({name , email , mobile , password})

          });
          const json =await response.json();
          console.log(json);
          if(json.success){
            //** Save the auth token and redirect to home page */
            localStorage.setItem('token',json.authToken);
            history.push("/loginSignup");
            props.showAlert("Account created Successfully....Please Login Here  ","success");
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
    <h2 className='headersignup'>Registration Form</h2>
    <div className='signupdiv'>
      <form action="" onSubmit={handleSubmit}>
        <label className='labelinsignup' htmlFor="name">Enter a Name : </label>
        <input className='inputsignup' type="text" name="name" id="name" onChange={onChange} value={credentials.name}/>
<br />
        <label className='labelinsignup' htmlFor="email">Enter a Email : </label>
        <input className='inputsignup' type="email" name="email" id="email" onChange={onChange} value={credentials.email} />
<br />
        <label className='labelinsignup' htmlFor="mobile">Enter a Mobile No. : </label>
        <input className='inputsignup' type="number" name="mobile" id="mobile" onChange={onChange} value={credentials.mobile} />
<br />
        <label className='labelinsignup' htmlFor="password">Enter a Password : </label>
        <input className='inputsignup' type="password" name="password" id="password" onChange={onChange} value={credentials.password} />
<br />
        <label className='labelinsignup' htmlFor="cpassword">Confirm password : </label>
        <input className='inputsignup' type="password" name="cpassword" id="cpassword" onChange={onChange} value={credentials.cpassword}/>
<br />
        <button className='signupformsubmit'>Submit</button>
      </form>
    </div>

    </>
  )
}

export default Signup
