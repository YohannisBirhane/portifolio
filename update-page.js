const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf-8');

const updatedContent = content
  .replace(/<section id="about"[\s\S]*?<\/section>\s*<section id="skills"[\s\S]*?(?=<section id="projects")/, \
      {/* Dynamic Sections Placeholders */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">About Me & Skills</h2>
            <div className="w-16 h-1.5 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Text Content & Quick Facts */}
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center lg:text-left">
                <p>
                  I am a Software Engineering student at Debre Berhan University with a strong interest in building practical software systems. I enjoy working on projects like management systems, booking platforms, and web applications, and I am currently learning full-stack development using modern technologies.
                </p>
                <p>
                  My goal is to craft user-centric applications that solve real-world challenges while maintaining clean and efficient code architectures. I thrive on problem-solving, exploring new frameworks, and continuously evolving as a developer in order to build impactful digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="p-6 bg-gray-50 dark:bg-slate-800/80 rounded-2xl border border-gray-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Education</h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">Software Engineering</p>
                  <p className="text-xs text-gray-500 mt-1">Debre Berhan Univ.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-slate-800/80 rounded-2xl border border-gray-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Focus</h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">Full-Stack Dev</p>
                  <p className="text-xs text-gray-500 mt-1">API & Architecture</p>
                </div>
              </div>
            </div>

            {/* Right: Integrated Skills */}
            <div className="lg:w-1/2 w-full space-y-6">
              
              <div className="p-6 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden block">
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                  Primary Strength
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">??</span> Backend Architecture
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js (Express)', 'Laravel (PHP)', 'Spring Boot (Java)', 'MySQL', 'PostgreSQL'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-lg shadow-sm border border-indigo-100 dark:border-indigo-800 hover:scale-105 transition-transform cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">??</span> Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">???</span> Languages & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'C++', 'Python', 'PHP', 'JavaScript', 'Git / GitHub', 'Qt (C++)'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      \);

fs.writeFileSync('app/page.tsx', updatedContent);
console.log('Done modifying about and removing skills.');
