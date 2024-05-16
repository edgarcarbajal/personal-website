import GlassCard from "../glasscard";
import Image from "next/image";
import tractorImg from "../../public/tractor.jpg"

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
                    {'Some of my hobbies are playing video games (mostly fighting games, or JRPGs), doing exercise, or watching movies!\nSometimes I also code some projects here and there if I feel like it. I am currently intrested in trying to code something closer to hardware, so maybe check back on that later!'}
                </p>
            </GlassCard>
            <br></br>
            <br></br>

            <h1 className={'text-2xl font-mono'}>
                {'Relavent Work Experience:'}
            </h1>
            <GlassCard>
                <Image
                    src={tractorImg}
                    alt={'John Deere Tractor Image'}
                    width={900}
                    height={700}
                />
                
                <h2 className={'text-l font-mono'}> 
                    {'Software Engineer Intern @ John Deere (Summer 2023)'}
                </h2>
                <p className={'text-class'}>
                    {'I was a software engineer intern for 3 months at John Deere. Learned the basics of using React, Typescript on the frontend, and Java and Spring in the backend. I and 4 other interns revamped an old static feature in one of John Deere\'s critical web application for dealers into a more mordern and dynamic feature for each user. The feature itself was not that critical to the web application, but it was a quality-of-life feature for many users. Followed the process of specification, design, implementation, and testing.\n\nAfter spending most of our time in that, and finishing the major goals a little before our 3 months were over, we spent time fixing existing frontend React Enzyme tests by converting them to React Testing Library(RTL) tests.'}
                </p>
            </GlassCard>
            <br></br>
            <br></br>

            <h1 className={'text-2xl font-mono'}>
                {'Skills:'}
            </h1>
            <GlassCard>
                <p>{'These are some of the skills I have learned over the years in my own time, in college/univeristy classes, or at work. Not all of them relate to my current career of Software Engineering however.\n\n'}</p>
                <ul className={'list-disc p-4'}>
                    <li>{'C++'}</li>
                    <li>{'Basic Python'}</li>
                    <li>{'React & React Testing Library'}</li>
                    <li>{'Typescript'}</li>
                    <li>{'Java w/Mockito, Spring & Maven'}</li>
                    <li>{'DevOps CI/CD'}</li>
                    <li>{'Git/Github'}</li>
                    <li>{'MS Word & Excel'}</li>
                    <li>{'Forklift Operation Experience'}</li>
                    <li>{'Basic Unreal Engine 4 Experience'}</li>
                    <li>{'Basic Game Development Experience (w/UE4) - Entails modeling with 3D software too.'}</li>
                    <li>{'Fluent in English'}</li>
                    <li>{'Fluent in Spanish'}</li>
                </ul>
            </GlassCard>
        </div>
    );
};

export default InfoPage;
