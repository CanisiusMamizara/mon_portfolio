import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "canisiusmamizara9@gmail.com" },
    { logo: "logo-whatsapp", text: "+261 38 41 780 34" },
    {
      logo: "location",
      text: "Tanambao, Fianarantsoa",
    },
  ];


  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Engagez <span className="text-cyan-600">Moi</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Entrez en contact</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" >
            <input type="text" placeholder="Votre Nom" name="nom" />
            <input type="Email" placeholder="Votre Adresse Email" name="email" />
            <textarea placeholder="Votre Message" name="message" rows={10}></textarea>
            <button className="btn-primary w-fit">Envoyer</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
