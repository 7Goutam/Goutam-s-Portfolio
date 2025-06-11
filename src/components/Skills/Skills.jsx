const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Node.js", icon: "🌿" },
    { name: "MongoDB", icon: "🍃" },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="bg-[#1f1f1f] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className=" text-center text-3xl font-bold text-white mb-12"> <span className="text-cyan-400">Skills</span> </h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" mt-6 bg-[#1a1919] p-6 border-x-cyan-400 boa rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-white font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  