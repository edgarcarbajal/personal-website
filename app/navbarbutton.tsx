import { useState } from "react";

const NavbarButton = (props: 
    {
        buttonText: string
        hrefLink?: string
    }) => {
    const [hoverButtonStyle, setHoverButtonStyle] = useState('navbar-item');

    const changeButtonStyleHover = () => {
        hoverButtonStyle === 'navbar-item' ? 
            setHoverButtonStyle('navbar-item-hover'):
            setHoverButtonStyle('navbar-item');
    };

    return (
        <div 
            className={hoverButtonStyle}
            onMouseEnter={changeButtonStyleHover}
            onMouseLeave={changeButtonStyleHover}
        >
            <a 
                href={props.hrefLink ? props.hrefLink : '#'}
                className={'navbar-anchor'}
            >
                {props.buttonText}
            </a>
        </div>
    );

};

export default NavbarButton;
