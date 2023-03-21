import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile  } from '../store/actions'
// import { AddressComponent } from "../components/Address-comp";
import { Profile } from "./Profile";

//load Shopping profile
const Login = () => {

    const { user, profile } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const { id, token } = user;

    // const { address, whishlist, orders } = profile;
    
    const [isSignup,setSignup] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ phone, setPhone ] = useState('');

    useEffect(() => {
        if(token){
            dispatch(onViewProfile())
        }
    },[token])
 
    const userSignup = () => {
        //call Signup
        dispatch(onSignup({email,password,phone}));
    }
 
    const userLogin = () => {
        dispatch(onLogin({email, password}));
    }
  
    const loginForm = () => {
        return (<div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,height: '30rem', backgroundColor: '#6c75!important'}}>
                <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
                    <form >
                        <div className="from-group" controlId="formBasicEmail">
                            <label>Email address</label>
                            <input className="form-control" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="from-group" controlId="formBasicPassword">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="row m-2 float-right">
                            <button  className="btn btn-secondary mr-2 " onClick={() => userLogin()} type="button">
                                Login
                            </button>
                            <button className="btn btn-secondary" onClick={() => setSignup(true)} type="button">
                                Signup
                            </button> 

                        </div>
                    </form>
                </div>
        </div> );
            
    }

    const signUpForm = () => {
        return (<div className="row bg-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,height: '30rem'}}>
        <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
            <form>
                <div className="from-group" controlId="formBasicEmail">
                    <label>Email address</label>
                    <input className="form-control" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="from-group" controlId="formBasicPassword">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="from-group" controlId="formBasicPassword">
                    <label>Phone</label>
                    <input className="form-control" type="number" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="row m-2 ">
                    <button className="btn btn-primary" onClick={() => userSignup()} type="button">
                        Signup
                    </button> 

                </div>
            </form>
        </div>
</div> );
    
}

    if(token){
        return <Profile />
    }else{

        return <div className="container-fluid">
            {isSignup ? signUpForm() : loginForm()}
        </div>

    }


}


export { Login };