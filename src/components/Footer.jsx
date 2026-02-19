import React from 'react'


const Footer = () => {
    return (
        <footer className="w-full bg-[#222] pt-0 pb-8 px-4 flex flex-col items-center justify-center mt-auto relative">
            <img src="/IMAGEES/arielfooter.jpg" alt="Animador" className="w-full max-w-2xl object-cover grayscale opacity-80 mb-4 mt-0 rounded-t-xl" style={{maxHeight:'300px'}} />
            <div className="flex flex-col items-center gap-2">
                <span className="text-white text-sm mb-2">SÍGUEME EN REDES SOCIALES</span>
                <div className="flex gap-4 mb-4">
                    <a href="https://www.facebook.com/photo/?fbid=453362383459684&set=a.453362350126354&locale=es_LA" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-blue-100 transition"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
                    <a href="https://www.instagram.com/ariel_loaiza/?hl=es-la" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-pink-100 transition"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
                </div>
            </div>
            <div className="text-xs text-gray-300 mb-2">© 2026 Made by <a href="https://yeoolabs.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">yeoolabs.com</a></div>
            {/* WhatsApp floating button */}
            <a href="https://wa.me/50688578242" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
            </a>
        </footer>
    );
}

export default Footer