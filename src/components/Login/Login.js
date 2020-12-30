import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'

import { login } from '../../features/userSlice'



import { auth, provider } from '../../firebase'

import './Login.css'

const Login = () => {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div class="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="Login" />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={signIn}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
