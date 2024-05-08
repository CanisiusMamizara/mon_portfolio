import React from "react";
import hireMe from "/assets/images/projet.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Engagez <span className="text-cyan-600">Moi</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Voulez-vous du travail de ma part ?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
          Voulez-vous du travail de ma part ?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
           Je peux vous dire que je suis vraiment passionné en particulier sur le developpement web. Je suis entierement à votre disposition
            pour des projet. Si vous etes interessé sur quoi je propose, n'hesitez surtout pas a me contacter dans la formulaire de contact. <br />
            Je vous remercie de votre visite. <br />
            A bientot...
          </p>
          <a href="#contact"><button className="btn-primary mt-10">Dit Bonjour...</button></a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
