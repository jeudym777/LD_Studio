import React from 'react'


const HeroSection = () => {
    return (
        <section className="w-full bg-[#181818] py-0 px-0">
            <div className="w-full flex flex-col items-center justify-center relative">
                <div className="w-full flex flex-col md:flex-row items-stretch justify-center min-h-[350px] md:min-h-[350px] min-h-screen:max-h-[500px]">
                    {/* Imagen 1: Animador (ahora graduado) */}
                    <div className="flex-1 flex flex-col items-center justify-end relative overflow-hidden min-h-[200px] md:min-h-[350px]">
                        <img src={"/IMAGEES/arielfooter.jpg"} alt="Animador" className="object-cover w-full h-full opacity-80 grayscale" style={{maxHeight:'350px'}} />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end relative overflow-hidden min-h-[200px] md:min-h-[350px]">
                        <img src={"/IMAGEES/LDlogo.jpeg"} alt="Presentador" className="object-cover w-full h-full opacity-80" style={{maxHeight:'350px'}} />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end relative overflow-hidden min-h-[200px] md:min-h-[350px]">
                        <img src={"/IMAGEES/graduado.png"} alt="Locutor" className="object-cover w-full h-full opacity-80 grayscale" style={{maxHeight:'350px'}} />
                    </div>
                </div>
                {/* ...eliminar texto principal... */}
                {/* Redes sociales y contacto */}
                <div className="absolute right-8 bottom-8 flex flex-col items-end gap-2 text-white text-lg">
                    <a href="https://www.instagram.com/ariel_loaiza/?hl=es-la" target="_blank" rel="noopener noreferrer" className="hover:underline">@ARIEL_LOAIZA</a>
                    <a href="https://www.facebook.com/photo/?fbid=453362383459684&set=a.453362350126354&locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:underline">@ARIEL_LOAIZA_M</a>
                    <a href="https://www.youtube.com/c/GeekWorldNetwork" target="_blank" rel="noopener noreferrer" className="hover:underline">GEEK WORLD NETWORK</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection
