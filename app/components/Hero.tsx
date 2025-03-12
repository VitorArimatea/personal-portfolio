import { Spotlight } from "./ui/SpotlightNew"

const Hero = () => {
  return (
    <section className="h-[100vh] flex flex-col gap-2 justify-center items-center bg-black text-white relative">
        <Spotlight />

        <h1 className="text-xl md:text-3xl font-semibold">Vítor Arimatéa <span className="text-blue-400">Software Developer</span></h1>
        <p className="uppercase font-light tracking-wider text-[0.9rem]">Fazendo mágica dinâmica com Next.JS</p>
    </section>
  )
}

export default Hero