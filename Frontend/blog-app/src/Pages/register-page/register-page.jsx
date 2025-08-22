import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { useState } from 'react';
import '../Login-page/login-page.css';
import './register-page.css';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const [emailSearch,updateEmailSearch] = useState('');
    const [passwordSearch,updatePasswordSearch] = useState('');
    const [loginCredentials,updateLoginCredentials] = useState({email: '',password: ''});

    const updateEmail = event => {
        updateEmailSearch(event.target.value);
    }
    const updatePassword = event => {
        updatePasswordSearch(event.target.value);
    }

    const registerFormSubmission = event => {
        event.preventDefault();
        
        updateLoginCredentials({email: emailSearch,password: passwordSearch});
        navigate('/login',{replace:true});
    }
    
    return (
        <div className='register-form-container'>
            <form className="login-form register-form" onSubmit={registerFormSubmission}>
                <h1 className='login-page-title'>Register</h1>
                <div className='login-label-container'>
                    <label className='login-label'>Email</label>
                     <div className='login-label-input-contianer'>
                        <MdOutlineMailOutline className='email-icon'/>
                        <input type="email" placeholder='Enter your email' value={emailSearch} className="login-label-input" onChange={updateEmail} required/>
                    </div>
                </div>
                <div className='login-label-container'>
                    <label className='login-label'>Password</label>
                    <div className='login-label-input-contianer'>
                        <TbLockPassword className='email-icon'/>
                        <input type="password" placeholder='Enter your Password' value={passwordSearch} className="login-label-input" onChange={updatePassword} required/>
                    </div>
                </div>
                <div className='login-label-container'>
                    <label className='login-label'>Name</label>
                    <div className='login-label-input-contianer'>
                        <AiOutlineUser className="email-icon person-icon" />
                        <input 
                        type="text" 
                        placeholder='Enter your Name' 
                        className="login-label-input" 
                        required 
                        />
                    </div>
                </div>
                <div class="login-label-container">
                <label class="login-label">Gender</label>
                <div class="login-label-input-contianer radio-container">
                    <label className="radio-label"><input type="radio" name="gender" value="male" required /> Male</label>
                    <label className="radio-label"><input type="radio" name="gender" value="female" /> Female</label>
                    <label className="radio-label"><input type="radio" name="gender" value="not-say" /> Rather not to say</label>
                </div>
                </div>

                <div class="login-label-container">
                    <label class="login-label">Qualification</label>
                    <div class="login-label-input-contianer">
                        <LuGraduationCap className="email-icon"/>
                        <select class="login-label-input" required>
                        <option value="">Select your qualification</option>
                        <option value="student">Student</option>
                        <option value="professor">Professor</option>
                        <option value="employee">Employee</option>
                        <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                <div className='login-label-container'>
                        <label className='login-label'>Date of Birth</label>
                        <div className='login-label-input-contianer'>
                            <CiCalendar className="email-icon" />
                            <input 
                            type="date" 
                            className="login-label-input" 
                            required 
                            />
                        </div>
                </div>

                <div className='new-account'>
                <button className='new-account-button'><p className='create-account-para'>Go to Login</p></button></div>
                <div className='error-message'><p className="login-error-message"></p></div>
                <button className='login-button' type="submit" >Sign Up</button>
            </form>
        </div>
    )
}
export default Register;
