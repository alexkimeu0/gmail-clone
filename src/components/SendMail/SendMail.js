import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import firebase from 'firebase'
import { db } from '../../firebase'

import { closeSendMail } from '../../features/mailSlice'

import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import './SendMail.css'

const SendMail = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = (data) => {
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMail())
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMail())} />
            </div>    
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    type="email"
                    placeholder="To" 
                    ref={register({ required: true })}
                />
                {errors.to && <p className="sendMail__error">To is Required!</p> }

                <input 
                    name="subject" 
                    type="text" 
                    placeholder="Subject" 
                    ref={register({ required: true })}
                />
                {errors.subject && <p className="sendMail__error">Subject is Required!</p> }

                <input name="message" 
                    type="text" 
                    placeholder="Message..." 
                    className="sendMail__message" 
                    ref={register({ required: true })}
                />
                {errors.message && <p className="sendMail__error">Message is Required!</p> }

                <div className="sendMail__options">
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className="sendMail__send"
                    >Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
