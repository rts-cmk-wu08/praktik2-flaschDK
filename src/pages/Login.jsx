import { Link } from "react-router-dom";
import { useRef, useContext, useEffect } from "react";
import {UserContext} from '../App'

const Login = () => {
    const refUser = useRef()
    const refPassword = useRef()
    const {setUser} = useContext(UserContext)
    
    const submitHandler = (e) => {
        e.preventDefault()
        setUser(refUser.current.value)
        console.log(refUser.current.value, refPassword.current.value)
        }
    return ( 
        <>
        <h1>Log ind på din konto</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="email" >Email</label>
            <input type="email" id="email" ref={refUser} placeholder="Email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={refPassword}placeholder="Password"/>
        <button type="submit">Log ind</button>
        </form>
        <form onSubmit={submitHandler}>
            <p>Log ind med</p>
            <button type="submit">Google</button>
            <button type="submit">Facebook</button>
            <button type="submit">Twitter</button>
        </form>
        <p>Har du ikke en konto? <Link to="/register/">Opret bruger</Link></p>
        </>
     );
}
 
export default Login;