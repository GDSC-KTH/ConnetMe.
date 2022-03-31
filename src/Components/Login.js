import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'; 
import { auth } from '../firebase'; 

function Login() {
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        

         // Firebase registration

        const register = e=> {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(email, password).then((auth) => {
                //it sucessfully create a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/siginstudnet')
                }
            })
            .catch(error => alert(error.message))
        } 

    return (
        <div className="login">
            <Link to="/">
           
            </Link>
            <div className="logincontainer my-4">
                <h1 className='text-center'>Get Started</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange= {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password"  value={password} onChange= {e => setPassword(e.target.value)}/>
                <h5>Years of Experience</h5>
                <input type="text"/>
                <h5>Filed of Study</h5>
                <input type="text"/>
                <h5>Level of Edcation</h5>
                <input type="text"/>
                <h5>Level of Education</h5>
                <input type="text"/>
                <h5>Skills</h5>
                <input type="text"/>
                <h5>Github links</h5>
                <input type="text"/>
            </form>
            <button type='submit' onClick={register} className=" btn btn-danger ">Sign Up</button>
           <Link to="/signinstudent"> <button type='submit' className=" mt-3 mx-auto d-block btn btn-danger ">Sign In </button>  </Link>
            </div>
        </div>
    )}

export default Login
