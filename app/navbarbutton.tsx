import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarButton = (props: 
    {
        buttonText: string
        hrefLink: string
    }) => {

    const pathname = usePathname();
    const isActiveLink = props.hrefLink == pathname;
    
    return(
        <div className="m-4">
            <Link
                className={isActiveLink ? 'navbar-button-selected' : 'navbar-button'}
                href={props.hrefLink}
            >
                {props.buttonText}
            </Link>
        </div>
    );
};

export default NavbarButton;
