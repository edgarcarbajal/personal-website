import GlassCard from "../glasscard";

const InfoPage = () => {
    return (
        <div className={'m-8'}>
            <h1 className={'text-2xl font-mono'}>
                {'About Me:'}
            </h1>
            <GlassCard>
                <p className={'text-class'}>
                    {'Hello!\n\nMy name is Edgar Carbajal. I am currently a graduate from NIU) '}
                    {'with a major Computer Science B.S., and a minor in Applied Mathamatics.\n\n'}
                    {'Below this section will be some other subsections showing of any experience, skills, and hobbies I have. (not yet implemented)'}
                </p>
            </GlassCard>
        </div>
    );
};

export default InfoPage;
