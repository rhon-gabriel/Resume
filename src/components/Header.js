import React from 'react'
import logo from "../assets/images/logo.png";
import {Button}from '@material-ui/core';

export default function Header() {
    return (
        <div style={styles.headerWrapper}>
            <a href="/">
              <img style={{width: 125}} src={logo} alt="" />
            </a>
              <Button style={styles.headerButton}>About me</Button>
        </div>
    )
}

const styles = {
    headerWrapper: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    headerButton: {
        textTransform: "none",
        fontSize: 18, 
        padding: 10
    },
}