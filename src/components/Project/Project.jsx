const projects = [
    {
      id: 1,
      title: "Airbnb Clone",
      description: "A responsive clone of Complete Airbnb's website with filters.",
      tech: ["MongoDB", "Node.js", "Express"],
      demoLink: "https://twond-year-main-project.onrender.com/listings",
      codeLink: "https://github.com/7Goutam/2nd-Year-main-Project.git",
      image: "./public/images/WanderLust.png",
    },
    {
      id: 2,
      title: "E-commerce Frontend",
      description: "A modern UI for an e-commerce site using React and Tailwind.",
      tech: ["React", "TailwindCSS" ],
      demoLink: "https://7goutam.github.io/E-Commerce-Frontend/",
      codeLink: "https://github.com/7Goutam/E-Commerce-Frontend.git",
      image: "./public/images/E-Commerce.png", // replace with real image
    },
    {
      id: 3,
      title: "Book Store",
      description: "This is MERN Stack Website.",
      tech: ["React", "TailwindCSS", "MongoDB", "NodeJs"],
      demoLink: "#",
      codeLink: "https://github.com/7Goutam/Book_Store-Site.git",
      image: "./public/images/BookStore.jpg",
    },
    {
      id: 4,
      title: "Dice Game",
      description: "This Game is for understanding of React-Vite",
      tech: ["React", "TailwindCSS"],
      demoLink: "https://dice-game-b5ud.vercel.app/",
      codeLink: "https://github.com/7Goutam/Dice-Game.git",
      image: "./public/images/Dice Game.png",
    },
    {
      id: 5, 
      title: "Simons Game",
      description: "This Game is for understanding of JS.",
      tech: ["HTML", "CSS", "JavaScript" ],
      demoLink: "https://7goutam.github.io/Simon-Game/",
      codeLink: "https://github.com/7Goutam/Simon-Game.git",
      image: "./public/images/Simon's Game.png",
    },
  ];
 
const Projects = () => {
  return (
    <section id="projects" className="bg-[#1f1f1f] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-cyan-500/30 block"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm text-white flex flex-col justify-center items-center px-6 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out z-10">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 transform group-hover:scale-105">
                  {project.title}
                </h3>
                <p className="text-sm text-center text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demoLink, "_blank");
                    }}
                    className="z-20 border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.codeLink, "_blank");
                    }}
                    className="z-20 border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Code
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



  