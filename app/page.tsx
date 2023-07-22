import GlassCard from "./glasscard";

export default function Home() {
  return (
    <div className={'m-8'}>
      <h1 className={'text-2xl font-mono'}>
        {'Home page!'}
      </h1>
      <GlassCard>
        <p>Some stuff goes here!</p>
      </GlassCard>
    </div>
  )
}
