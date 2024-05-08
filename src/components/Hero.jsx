import React, { useState, useEffect } from "react";
import About from "/assets/images/portfolio.png";
import "./Hero.css";

const Hero = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setReveal(true);
    }, 1000);

    
    return () => clearTimeout(timeout);
  }, []);

  const social_media = [
    { logo: "logo-instagram", link: "https://www.instagram.com/canisiusmh" },
    { logo: "logo-facebook", link: "https://www.facebook.com/canisius.mamizara" },
    { logo: "logo-linkedin", link: "https://www.linkedin.com/in/canisius-mamizara-9a511527a" },
    { logo: "logo-twitter", link: "https://twitter.com/MamizaraC93846" },
  ];

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={About} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <div className="text-cyan-600 md:text-6xl text-5xl reveal-text">
              {reveal && (
                <>
                  <span>S</span>
                  <span>a</span>
                  <span>l</span>
                  <span>u</span>
                  <span>t</span>
                  <span>!</span>
                  <div className="cursor"></div>
                  <br />
                </>
              )}
            </div>
            Je m'appelle <span>Mamizara H. Canisius</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Développeur Web Fullstack
          </h4>
          <a href="#contact"><button className="btn-primary mt-8">Contactez Moi</button></a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, i) => (
              <div key={i} className="text-gray-600 hover:text-white cursor-pointer">
                <a href={icon?.link} target="_blank" rel="noopener noreferrer">
                  <ion-icon name={icon?.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
