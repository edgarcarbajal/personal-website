import Image from 'next/image'

const Footer = (props: {id: string}) => {
    return (
        <div 
            id={props.id} 
            className={'conatiner grid grid-cols-2 gap-2 footer-container-outer justify-items-center'}
        >
            <div className={'row-start-1 p-4 rounded transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-100 hover:bg-violet-400 duration-300'}>
                <a href={'https://github.com/edgarcarbajal'} target={'_blank'}>
                    <Image
                        src={'/github-mark.svg'}
                        alt={'Github Logo'}
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            <div className={'row-start-1 p-4 rounded transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-100 hover:bg-violet-400 duration-300'}>
                <a href={'https://linkedin.com/in/edgar-carbajal-382432244'} target={'_blank'}>
                    <Image
                        src={'/linkedin-icon.svg'}
                        alt={'Github Logo'}
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            <h6 className={'row-start-2 col-span-2'}>
                {'Copyright®: Edgar Carbajal'}
            </h6>
        </div>
    );
}

export default Footer;