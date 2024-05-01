import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Expert",
      count: 90,
      title: "HTML"
    },
    {
      logo: "logo-css3",
      level: "Avancer",
      count: 80,
      title: "CSS"
    },
    {
     logo: "logo-javascript",
      level: "Intermediaire",
      count: 75,
      title: "Javasript"
    },
    {
      logo: "logo-react",
      level: "Intermediaire",
      count: 75,
      title: "React Js"
    },
    {
      logo: "logo-wordpress",
      level: "Intermediaire",
      count: 75,
      title: "Wordpress"
    }, 
    {
      logo: "logo-nodejs",
      level: "Intermediaire",
      count: 75,
      title: "Node Js"
    },
    {
      logo: "logo-laravel",
      level: "Debutant",
      count: 50,
      title: "Laravel"
    }
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Mes <span className="text-cyan-600">Competences</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Mes connaissances</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <p className="text-xl mt-3">{skill.title}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
                
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
