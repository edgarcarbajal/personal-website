const Header = (props: {title: string}) => {
    return (
        <div className={'container bg-amber-700'}>
            <a href={'.'}>
                <img 
                    src={'./images/galaxyPNG.png'}
                    height={400}
                    width={400}
                />
            </a>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;
