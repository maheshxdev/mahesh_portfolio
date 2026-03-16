const Skills = () => {
  const mainSkills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: ".NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0a1120] text-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-blue-600 dark:text-yellow-500 mb-4 tracking-tighter uppercase italic">
            My Tech Landscape
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            A curated selection of languages and frameworks I use to bring ideas
            to life. I am consistently learning, adapting, and building with the
            best of modern technology to deliver high-quality, results-driven
            solutions.
          </p>
        </div>

        {/* Skills Layout Container */}
        <div className="relative flex flex-col md:flex-row items-center gap-12">
          {/* Vertical Label (Desktop Only) */}
          <div className="hidden md:block border-l-4 border-blue-600 dark:border-yellow-500 pl-4 h-fit transition-colors">
            <span className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">
              TECH
            </span>
          </div>

          {/* Grid Layout */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {mainSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-[#111827] p-6 rounded-2xl border border-black dark:border-slate-800 hover:border-blue-500 dark:hover:border-yellow-500/50 transition-all group flex flex-col items-center justify-center space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                />
                <span className="text-[10px] md:text-xs font-black text-slate-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-white uppercase tracking-widest transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
