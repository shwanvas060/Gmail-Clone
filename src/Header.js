import React from 'react';
import "./App.css";
import "./header.css";  
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
function Header() {
    return (
        <div className="header">
           <div className="header_left">
               <IconButton>
               <MenuIcon />
               
               </IconButton>
               <img src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png" alt="GMail" />

           </div>
           <div className="header_middle">
           <IconButton>
               <SearchIcon />
            </IconButton>
               <input placeholder="Search mail" type="text" />
               <ArrowDropDownIcon className="header_inputCaret" />
            </div>
           <div className="header_right">
               <IconButton><AppsIcon/></IconButton>
               <IconButton><NotificationsIcon/></IconButton>
               <Avatar/>
           </div>
        </div>
    )
}

export default Header;