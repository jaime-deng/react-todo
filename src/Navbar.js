import React from "react";

function Navbar(props) {
    return (
        <nav>
            <a href="/About">About us</a> 
            <br />
            <a href="/">Home</a>
            <br />
            <a href="/API">API</a>
        </nav>
    );
}

export default Navbar;