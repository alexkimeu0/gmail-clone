import React from 'react'
import Section from './Section/Section'
import MailRow from './MailRow/MailRow'


import { Checkbox, IconButton } from '@material-ui/core'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'


import './MailList.css'


const MailList = () => {
    return (
        <div className="mailList">
            <div className="mailList__settings">
                <div className="mailList__settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="mailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>  
            
            <div className="mailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected /> 
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" /> 
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" /> 
            </div>

            <div className="mailList__list">
                <MailRow
                    title="Website"
                    subject="Library Website"
                    description="Yoyomao! Before I peace out, can we get the Library site rolling first thing tomorrow?"
                    time="10pm"
                />
                <MailRow
                    title="Website"
                    subject="Library Website"
                    description="Yoyomao! Before I peace out, can we get the Library site rolling first thing tomorrow?"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default MailList
