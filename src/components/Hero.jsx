import profileImg from "../../public/img.jpg.jpeg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center">
      <img
        src={profileImg}
        alt="MaheshxDev"
        className="w-40 h-40 rounded-full border-4 border-primary mb-6 object-cover shadow-xl"
      />
      <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
        Mahesh Darji
      </h2>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 px-4">
        Adaptable & Results-Driven IT Professional. I find joy in solving
        challenges and turning them into opportunities for personal and
        professional growth.
      </p>

      {/* Optimized Button Container for Laptop & Mobile */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-3xl mx-auto px-4">
        <a
          href="https://github.com/maheshxdev"
          target="_blank"
          className="w-full sm:w-40 hover:bg-blue-600 bg-transparent text-blue-600 hover:text-white border-2 border-blue-600 py-3 rounded-full font-bold hover:opacity-90 transition shadow-lg text-center"
        >
          GitHub
        </a>
        <a
          href="/Mahesh_Darji_Resume.pdf"
          download="Mahesh_Darji_Resume.pdf"
          className="w-full sm:w-56 flex items-center justify-center gap-2 bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/mahesh-darji-941a202b5"
          target="_blank"
          className="w-full sm:w-40 border-2 border-blue-600 text-blue-600  px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition text-center"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
