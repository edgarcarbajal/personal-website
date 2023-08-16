const GlassCard = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={'box-semitransparent backdrop-blur-sm flex'}>
            {children}
        </div> 
    );
};

export default GlassCard;