const Certifications = () => {
  const certs = [
    { 
      title: "Inheritance and Data Structures in Java", 
      date: "May - 2024", 
      platform: "Coursera",
      skills: "OOPs | Java | Algorithms"
    }
    ,
    { 
      title: "Introduction to HTML, CSS & JavaScript", 
      date: "December - 2024", 
      platform: "Coursera",
      skills: "Frontend | Web Development"
    },
    { 
      title: "Exploratory Data Analysis for Machine Learning", 
      date: "June - 2025", 
      platform: "Coursera",
      skills: "Python | EDA | Scikit-learn"
    }
    
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a1120] transition-colors overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div className="text-left">
            <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
              Academic <span className="text-blue-600 dark:text-yellow-500 italic">Milestones</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">
              Verified certifications from global learning platforms.
            </p>
          </div>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-8 hidden md:block mb-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <div 
              key={i} 
              className="group relative bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              {/* Platform Icon Overlay */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12 dark:fill-white fill-slate-900" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.562c0-3.142 2.112-5.717 5.11-6.524V5.701A5.688 5.688 0 0 1 10.8 0h2.4a5.688 5.688 0 0 1 5.69 5.701v1.337c2.998.807 5.11 3.382 5.11 6.524 0 3.731-3.025 6.757-6.755 6.757H6.755C3.025 20.319 0 17.293 0 13.562z"/>
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
                  {c.platform}
                </span>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight min-h-[3.5rem]">
                  {c.title}
                </h4>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">Skills covered</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium italic">{c.skills}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-600 uppercase">
                    {c.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-yellow-500 transition-colors">
                    <svg className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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

export default Certifications;