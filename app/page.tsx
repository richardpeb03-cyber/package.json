import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e14] text-white selection:bg-[#C9A84C] selection:text-black">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter uppercase">
          <span className="italic text-[#C9A84C]">Fabulous</span> LOGISTICS
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A84C] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <h2 className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-4">Nigeria's Premier Travel Agency</h2>
        <h1 className="text-6xl md:text-8xl font-black italic mb-6 leading-tight uppercase">FABULOUS <br /> <span className="text-[#C9A84C]">Logistics</span></h1>
        <p className="text-xl italic text-gray-400 mb-10">"Every trip is a special emotion"</p>
        <div className="flex justify-center">
            <a href="https://wa.me/2348036414646" className="bg-[#C9A84C] text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition shadow-lg shadow-[#C9A84C]/20">BOOK A TRIP</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-[#C9A84C] uppercase tracking-widest text-sm mb-2 text-center">What we offer</h3>
        <h2 className="text-4xl font-bold mb-12 text-center uppercase">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Flight Reservations', 'Hotel Bookings', 'Visa Assistance', 'Tour Packages', 'Airport Transfers', 'Car Rentals'].map((service) => (
            <div key={service} className="p-8 border border-gray-800 bg-[#11161d] rounded-2xl hover:border-[#C9A84C] transition group">
              <h4 className="text-xl font-bold mb-3 group-hover:text-[#C9A84C] uppercase">{service}</h4>
              <p className="text-gray-400 text-sm">Expert handling of your travel needs with premium support across Nigeria and worldwide.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-24 px-6 text-center rounded-t-[3rem] border-t border-gray-900">
        <h2 className="text-5xl font-bold italic mb-12 uppercase">LET'S <span className="text-[#C9A84C]">travel</span></h2>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <a href="https://wa.me/2348036414646" target="_blank" className="bg-[#25D366] py-4 rounded-xl font-bold flex items-center justify-center gap-2">WhatsApp Support 1</a>
          <a href="https://wa.me/2348107215325" target="_blank" className="bg-[#25D366] py-4 rounded-xl font-bold flex items-center justify-center gap-2">WhatsApp Support 2</a>
        </div>
        <div className="mt-12 text-gray-500 text-xs tracking-widest uppercase">Follow: @ricobo_ | @theslickchef</div>
        <p className="mt-8 text-[10px] text-gray-700 uppercase">© 2026 Fabulous Logistics and Services Limited</p>
      </section>
    </main>
  )
}
