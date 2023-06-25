const Header = (props: {id: string, title: string}) => {
    return (
        <div id={props.id} className={'header-container'}>
            <a href={'.'}>
                <br/>
                    <h1 className={'header-title header-container-child'}>{props.title}</h1>
                <br/>
            </a>
        </div>
    );
}

export default Header;
