import GlassCard from "../glasscard";
import blogContent from "../../public/blog-content.json"
import imageSizes from "../../public/image-sizes.json"
import Image from "next/image";
import HorizBar from "../horizbar";

const BlogPage = () => {
    const {content} = blogContent
    const reversedContent = content.map(e=>e).reverse()
    return (
        <div className={'m-8'}>
            <h1 className={'text-2xl font-mono'}>
                {'Stuff for a blog, or things I find interesting'}
            </h1>
            <GlassCard>
                <p className={'text-class'}>{'Here is some placeholder text for the intro to the blog page.\n\n月光と日差しの美しさ'}</p>
            </GlassCard>
            
            <br></br>
            <HorizBar middleInsertStr={'Posts'}/>

            {reversedContent.map((e, index) => {
                const date = new Date(e.date)
                return (
                    <div key={index}>
                        <br></br>
                        <h1 className={'text-2xl font-mono'}>
                            {e.title}
                        </h1>
                        <h2>{date.toLocaleString()}</h2>
                        <GlassCard>
                            {e.image !== 'none' ? 
                            <Image
                                src={e.image}
                                alt={'Blog Post Image'}
                                width={imageSizes[e.imageSize].width}
                                height={imageSizes[e.imageSize].height}
                            /> : ''}
                            <p className={'text-class'}>{e.textPre}</p>
                        </GlassCard>
                    </div>
                )
            })}
        </div>
    );
};

export default BlogPage;
