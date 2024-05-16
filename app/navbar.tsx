import NavbarButton from "./navbarbutton";

const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <NavbarButton 
                buttonText={'About'} 
                hrefLink={'/info'}
            />
            <NavbarButton 
                buttonText={'Work / Projects'}
                hrefLink={'/projects'}
            />
            <NavbarButton 
                buttonText={'Blog'}
                hrefLink={'/blog'}
            />
        </nav>
    );
};

export default Navbar;
