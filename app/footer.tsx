const Footer = (props: {id: string}) => {
    return (
        <div id={props.id} className={'footer-container-outer'}>
            <h6>{'Copyright®: Edgar Carbajal'}</h6>
        </div>
    );
}

export default Footer;