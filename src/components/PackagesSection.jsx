import React from 'react';

const packages = [
  {
    title: 'El Debut',
    subtitle: 'Paquete 1:',
    type: 'GRUPAL',
    features: [
      'Taller de 4 horas (sábado intensivo)',
      'Técnicas de dicción y respiración',
      'Manejo del miedo escénico',
      'Ejercicios prácticos frente a cámara',
      'Edición básica de reels (CapCut)'
    ],
    price: '₡25.000',
    highlight: false
  },
  {
    title: 'Marca Personal',
    subtitle: 'Paquete 2:',
    type: 'INDIVIDUAL',
    features: [
      '3 sesiones individuales de 1.5 horas',
      'Diagnóstico de voz y lenguaje corporal',
      'Asesoría en CapCut o Adobe Premiere',
      'Grabación y edición de Demo Reel profesional'
    ],
    price: '₡75.000',
    highlight: true
  },
  {
    title: 'Alto Impacto',
    subtitle: 'Paquete 3:',
    type: 'CORPORATIVO',
    features: [
      'Workshop de media jornada',
      'Presentación persuasiva y streaming (vMix / OBS)',
      'Creatividad aplicada a equipos de ventas'
    ],
    price: '₡250.000',
    highlight: false,
    vip: true
  }
];

const PackagesSection = () => (
  <section className="w-full flex flex-col items-center py-12 bg-[#181818]">
    <h2 className="text-4xl font-bold text-white text-center mb-2">DOMINA TU VOZ Y CÁMARA</h2>
    <p className="text-white text-center mb-8 max-w-2xl">Un programa diseñado para transformar tu presencia frente a público y cámara.</p>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
      {packages.map((pkg, idx) => (
        <div
          key={pkg.title}
          className={`flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col border-2 ${pkg.highlight ? 'border-red-400 scale-105' : pkg.vip ? 'border-yellow-300' : 'border-transparent'} relative`}
        >
          <span className="italic text-red-500 font-semibold mb-1">{pkg.subtitle}</span>
          <h3 className="text-2xl font-bold mb-2 text-black">{pkg.title}</h3>
          <ul className="mb-4 text-gray-800 flex-1">
            {pkg.features.map((f, i) => (
              <li key={i} className="flex items-center mb-1"><span className="text-red-500 mr-2">✓</span>{f}</li>
            ))}
          </ul>
          <div className={`mt-auto text-center font-bold py-2 rounded ${pkg.highlight ? 'bg-red-500 text-white' : pkg.vip ? 'bg-yellow-300 text-black' : 'bg-red-500 text-white'}`}>Inversión: {pkg.price}</div>
        </div>
      ))}
    </div>
    <div className="mt-8 bg-gray-200 text-center text-xs text-gray-700 rounded px-4 py-2 max-w-xl">
      TALLERES GRUPALES TIENEN CUPO LIMITADO <span className="text-red-500 font-bold">(4 PERSONAS POR GRUPO)</span><br />
      FECHAS DEL TALLER SE DARÁN CONFORME SE VAN LLENANDO LOS GRUPOS
    </div>
  </section>
);

export default PackagesSection;