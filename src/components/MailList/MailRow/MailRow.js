import React from 'react'
import { useHistory } from 'react-router-dom'

import { Checkbox, IconButton } from '@material-ui/core'

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

import './MailRow.css'

const MailRow = ({ id, title, subject, description, time }) => {

    const history = useHistory()

    return (
        <div className="mailRow" onClick={() => history.push('/mail')}>
            <div className="mailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>   
            <h3 className="mailRow__title">{ title }</h3> 
            <div className="mailRow__message">
                <h4>{subject} {" "}<span className="mailRow__description">-{" "}{ description}</span></h4>                
            </div> 
            <p className="mailRow__time">{ time }</p> 
        </div>
    )
}

export default MailRow
