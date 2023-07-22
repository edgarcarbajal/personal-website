import GlassCard from "../glasscard";

const InfoPage = () => {
    return (
        <div className={'m-8'}>
            <h1 className={'text-2xl font-mono'}>
                {'Hello! info page is here'}
            </h1>
            <GlassCard>
                <p>{'Testing!!!!'}</p>
            </GlassCard>
        </div>
    );
};

export default InfoPage;
