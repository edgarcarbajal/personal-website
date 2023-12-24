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
                <p className={'text-class'}>
                    {'Welcome to the blog page!\n\nThis page will have posts about random things that I decide to write about or test for this website. '}
                    {'Since I am not really much of a blogger, you wont see this page updated that often. There might be a few posts dedicated to some website component testing or two. '}
                    {'This might change in the future as I spend more time on the website but who knows.\n\nPlease enjoy the random posts here!'}
                    </p>
            </GlassCard>
            
            <br></br>
            <HorizBar middleInsertStr={'Posts'}/>

            {reversedContent.map((e, index) => {
                const date = new Date(e.date)
                let imgKey = e.imageSize as keyof typeof imageSizes
                return (
                    <div key={index}>
                        <br></br>
                        <h1 className={'text-2xl font-mono'}>
                            {e.title}
                        </h1>
                        <h2>{date.toLocaleString()}</h2>
                        <GlassCard>
                            {e.image !== 'none' ? 
                            // Any new blogposts with images, choose a size that matches closely to its max resolution for best quality
                            // Choose medium/small for side image in desktop, or large/xtra-large etc... for big image above the text (like in mobile) for desktop.
                            <Image
                                className={'grow'}
                                src={e.image}
                                alt={'Blog Post Image'}
                                width={imageSizes[imgKey].width}
                                height={imageSizes[imgKey].height}
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
