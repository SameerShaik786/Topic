import './login-page.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useState } from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
    const [emailSearch,updateEmailSearch] = useState('');
    const [passwordSearch,updatePasswordSearch] = useState('');
    const [loginCredentials,updateLoginCredentials] = useState({email: '',password: ''});

    const updateEmail = event => {
        updateEmailSearch(event.target.value);
    }
    const updatePassword = event => {
        updatePasswordSearch(event.target.value);
    }

    const loginFormSubmission = event => {
        event.preventDefault();
        updateLoginCredentials({email: emailSearch,password: passwordSearch});
    }
    
    return (
        <div className='login-container'>
            <form className="login-form" onSubmit={loginFormSubmission}>
                <h1 className='login-page-title'>Topic</h1>
                <div className='login-label-container'>
                    <label className='login-label'>Email</label>
                     <div className='login-label-input-contianer'>
                        <MdOutlineMailOutline className='email-icon'/>
                        <input type="text" placeholder='Enter your email' value={emailSearch} className="login-label-input" onChange={updateEmail}/>
                    </div>
                </div>
                <div className='login-label-container'>
                    <label className='login-label'>Password</label>
                    <div className='login-label-input-contianer'>
                        <TbLockPassword className='email-icon'/>
                        <input type="password" placeholder='Enter your Password' value={passwordSearch} className="login-label-input" onClick={updatePassword}/>
                    </div>
                </div>
                <div className='new-account'>
                <button className='new-account-button'><p className='create-account-para'>Create account</p></button></div>
                <div className='error-message'><p className="login-error-message"></p></div>
                <button className='login-button' type="submit">
                    <Link to="/">Login</Link></button>
            </form>
        </div>
    )
}
export default Login;
