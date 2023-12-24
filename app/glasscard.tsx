const GlassCard = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={'box-semitransparent backdrop-blur-sm flex flex-wrap'}>
            {children}
        </div> 
    );
};

export default GlassCard;