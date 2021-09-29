import React from 'react'
import { Button } from '@material-ui/core'
import "./Login.css"
import { auth, provider } from '../../firebase'
import { useStateValue } from '../StateProvider/StateProvider'
import { actionTypes } from '../Store/Reducer'


function Login() {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSqfwlfPLvSfCDjIcMDB08IuPh0BDjJr7fQ&usqp=CAU"
                    alt="" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
