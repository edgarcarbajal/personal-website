import GlassCard from "./glasscard";

export default function Home() {
  return (
    <div className={'m-8'}>
      <h1 className={'text-2xl font-mono'}>
        {'Home page!'}
      </h1>
      <GlassCard>
        <p>
          {'Welcome to my personal website!! This is the home page which I plan to just fill in with random images of the other pages, or maybe a custom logo for my website in the future. '}
          {'Please click on the navbar to see more! If you want to learn more about me that is not on the website, click on the Github/LinkedIn icons below.'}
        </p>
      </GlassCard>
      <br></br>
      <GlassCard>
        <p>
          {'You can also always come back to this page by clicking the title!'}
        </p>
      </GlassCard>
    </div>
  )
}
