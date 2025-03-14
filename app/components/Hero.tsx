import { FaLocationArrow } from "react-icons/fa"
import Button from "./ui/Button"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Hero = () => {
  return (
    <section>
      <main className="h-[100vh] flex flex-col gap-2 justify-center items-center bg-black relative px-4 py-6" >
        <Spotlight />

		<h1 className="text-[35px] md:text-5xl font-bold text-center        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Vítor Arimatéa Software Developer
        </h1>
        
		<TextGenerateEffect
          className="font-light tracking-wider text-[18px] md:text-2xl lg:text-2xl text-center"
		  
		  words="Transformando códigos em experiências únicas e impactantes"
        />
		
		<a href="#projects">
			<Button 
				title="Meus Melhores Projetos" 
				icon={<FaLocationArrow />}
				position="right" 
			/>
		</a>
      </main>
    </section>
  )
}

export default Hero