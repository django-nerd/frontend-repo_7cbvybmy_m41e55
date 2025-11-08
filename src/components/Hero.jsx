import React from 'react';
import Spline from '@splinetool/react-spline';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" className="text-white text-xl md:text-2xl font-semibold tracking-tight">
          <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white">ISALL</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-white/90">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors text-sm font-medium">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg shadow-orange-500/20"
        >
          Contact Me
        </a>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-10 max-w-4xl">
          <p className="text-white/80 text-sm md:text-base mb-3 font-medium uppercase tracking-wider">
            Grow with Isall
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Digital Marketing and Marketing Project Handler with Brand
          </h1>
          <p className="text-white/90 mt-4 md:mt-5 text-base md:text-lg max-w-3xl">
            Expert in comprehensive digital marketing strategies, achieving up to
            <span className="font-semibold"> 1,702% increase in reach</span> and
            <span className="font-semibold"> 1.8 million video views</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-3 rounded-md text-sm md:text-base font-semibold shadow-lg shadow-orange-500/20"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors underline underline-offset-2 text-sm md:text-base"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
