import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { logout } from '../../features/userSlice'
import { auth } from '../../firebase'

import { IconButton, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.css'

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })        
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>   
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut} className="header__rightAvatar"/>
            </div>
        </div>
    )
}

export default Header
