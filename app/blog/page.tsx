import GlassCard from "../glasscard";

const BlogPage = () => {
    return (
        <div className={'m-8'}>
            <h1 className={'text-2xl font-mono'}>
                {'Stuff for a blog, or things I find interesting'}
            </h1>
            <GlassCard>
                <p>{'月光と日差しの美しさ'}</p>
            </GlassCard>
        </div>
    );
};

export default BlogPage;
