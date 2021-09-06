import React from 'react'
import "./TopNav.css";
import SearchIcon from '@material-ui/icons/Search';
import BackupIcon from '@material-ui/icons/Backup';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/Inbox';


export default function TopNav() {
    return (
        <div className="Header">
            <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"></img>

            <div className="alignSbar">
                <input className="searchBar" placeholder="Search accounts" type="search" autoComplete="off"></input>
                <button className="searchIcon"><SearchIcon /></button>
            </div>
            <div className="Ricon">
                <BackupIcon className="iconSpacing" />

                <SendIcon className="iconSpacing" />

                <InboxIcon className="iconSpacing" />
            </div>

        </div>
    )
}
