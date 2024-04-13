import React, { useState } from 'react'
import styles from "./Login.module.css"
import InputControl from "../InputControl/InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"; 
import { auth } from "../firebaseConfig";

const Login = () => {
    const navigate = useNavigate()
    const [values, setValues] =useState({
        email:"",
        pass:"",
    })
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [user] = useAuthState(auth); 
    const handleSubmission=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields")
            return;
        }
        setErrorMsg("")
        submitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.pass).then(
            async(res)=>{
                setSubmitButtonDisabled(false);
                // navigate("/")
            }
        )
        .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
          });
    }

    // if(user){
    //     navigate("/")
    // }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <InputControl
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
            />
            <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
          <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Not registered?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
        </div>
    </div>
    
  )
}

export default Login