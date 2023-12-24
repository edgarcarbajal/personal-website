import GlassCard from "../glasscard";
<<<<<<< HEAD
import imageSizes from "../../public/image-sizes.json"
import Image from "next/image";
import HorizBar from "../horizbar";
import projectContent from "../../public/project-content.json"
=======
>>>>>>> b4b490ff81f80770d3a978d74cc3933a6f251c94

const ProjectPage = () => {
    const {content} = projectContent
    const reversedContent = content.map(e=>e).reverse()

    return (
        <div className={'m-8'}>
            <h1 className={'text-2xl font-mono'}>
                {'Stuff for projects I\'ve done'}
            </h1>
            <GlassCard>
<<<<<<< HEAD
                <p className={'text-class'}>
                    {'Welcome to the project page! Here I will have some dedicated sections (similar to the Blog page) of any projects I have done. '}
                    {'I will give a breif description of the project (ie: what it is, what does it do), what technologies I used, why I chose to work on it, and show some screenshots/video of the project working! At the end I will include a direct link to any source code.\n\n'}
                    {'Anyways, I hope you enjoy browsing around here!'}
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
                        // Any new posts with images, choose a size that matches closely to its max resolution for best quality
                        // Choose medium/small for side image in desktop, or large/xtra-large etc... for big image above the text (like in mobile) for desktop.
                        <Image
                            className={'grow'}
                            src={e.image}
                            alt={'Project Post Image'}
                            width={imageSizes[imgKey].width}
                            height={imageSizes[imgKey].height}
                        /> : ''}
                        <p className={'text-class'}>{e.textPre}</p>
                    </GlassCard>
                </div>
            )
        })}
=======
                <p>{'bruh'}</p>
            </GlassCard>
>>>>>>> b4b490ff81f80770d3a978d74cc3933a6f251c94
        </div>
    );
};

export default ProjectPage;
