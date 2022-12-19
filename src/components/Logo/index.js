import React from "react";

const Logo = ({size}) => {
    const fontSize = size || '12px';
    return (
        <>
            <i className="fa fa-fire" style={{fontSize: fontSize, color: '#f9b115'}}> S & S </i>
        </>
    )
}

export default Logo;