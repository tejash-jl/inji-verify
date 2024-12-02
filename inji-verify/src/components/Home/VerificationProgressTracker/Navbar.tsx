import React from 'react';
import {NavbarContainer} from "./styles";

function Navbar(props: any) {
    // Logo goes here
    return (
        <NavbarContainer>
            <img src="https://i.ibb.co/7vdwCWL/Inji-Web-Logo.png" style={{height:'70px'}}/>
        </NavbarContainer>
    );
}

export default Navbar;
