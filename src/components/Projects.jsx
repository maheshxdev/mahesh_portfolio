const Projects = () => {
  const data = [
    {
      id: "01",
      title: "Rentopedia",
      tech: "MERN Stack | Cloudinary | Socket.IO | JWT | Tailwind CSS",
      desc: "Built a robust full-stack rental system allowing users to list, browse, and rent properties. I implemented secure JWT authentication and integrated Cloudinary for seamless image management. The platform features real-time rent requests and notifications via Socket.IO, along with dedicated owner controls for managing property status updates.",
      link: "https://rentopedia-app.vercel.app",
      image: "/rentopedia-home.png" 
    },
    {
      id: "02",
      title: "Nexus Study",
      tech: "Python | Django | Django Channels | WebRTC | JavaScript | SQLite",
      desc: "Developed a real-time virtual study platform for online collaboration. I engineered a multi-peer video calling system using WebRTC for direct P2P connections and utilized Django Channels for real-time signaling, chat, and in-call status indicators. The application ensures security through user authentication and password-protected study rooms.",
      link: "https://github.com/maheshxdev/NexusStudy.git",
      image: "/nexusstudy-home.png"
    },
    {
      id: "03",
      title: "CareConnect",
      tech: "ASP.NET Core MVC | EF Core | SQL Server | Bootstrap | SMTP",
      desc: "A sophisticated hospital management system with specialized panels for Admins, Doctors, and Patients. It handles everything from appointment booking and tracking to secure medical report access and prescription management. I also integrated SMTP for automated email verification and used Cookie Authentication for secure role-based access.",
      link: "https://github.com/maheshxdev/CareConnect.git",
      image: "/careconnect-home.png"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0a1120] transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 italic">Featured Work</h3>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col gap-40">
          {data.map((p, i) => (
            <div key={i} className="relative group">
              {/* Number Watermark - Fixed Position & Opacity */}
              <span className="absolute -top-16 -left-10 text-[12rem] font-black text-slate-200 dark:text-slate-800/30 select-none pointer-events-none z-0 transition-colors">
                {p.id}
              </span>

              <div 
                className={`relative z-10 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full md:w-3/5 group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/5 space-y-6">
                  <div className="space-y-2">
                    <p className="text-blue-500 font-bold text-sm tracking-[0.2em] uppercase italic border-l-4 border-blue-500 pl-4">
                      {p.tech}
                    </p>
                    <h4 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {p.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {p.desc}
                  </p>
                  
                  <div className="pt-6">
                    <a 
                      href={p.link} 
                      target="_blank" 
                      className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1"
                    >
                      {p.link.includes('vercel') ? 'Live Preview' : 'View on GitHub'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;