const fs = require('fs');
let code = fs.readFileSync('portifolio/app/page.tsx', 'utf8');

const sIdx = code.indexOf('<div className=\"relative flex flex-col min-h-screen font-sans text-gray-900');
const eIdx = code.indexOf('</main>') + 7;

const replacement = \<div className=\"relative flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-50 transition-colors duration-300 overflow-hidden\">
      {/* Dynamic Split Background mimicking the image */}
      <div className=\"absolute inset-0 flex pointer-events-none z-[-1]\">
        {/* Left side soft light purple/blue */}
        <div className=\"flex-1 bg-[#eeeffc] dark:bg-[#1a1b26] transition-colors duration-300\"></div>
        {/* Right side white/dark pure */}
        <div className=\"flex-1 bg-white dark:bg-[#12121c] transition-colors duration-300\"></div>
      </div>

      {/* 1. HERO SECTION */}
      <main className=\"flex flex-1 flex-col items-center justify-center relative z-10 w-full min-h-[90vh] text-center pt-20 px-6\">
        
        {/* Centered Content Block */}
        <div className=\"flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto my-auto\">
          <p className=\"text-sm font-bold tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase mb-2\">
            HEY! I AM
          </p>
          <h1 className=\"text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-950 dark:text-white\">
            Yohannis Birhane
          </h1>
          
          <div className=\"text-3xl md:text-5xl font-bold flex items-center justify-center gap-3 mt-4 text-slate-900 dark:text-gray-100\">
            <span>I'm a</span>
            <span className=\"text-blue-600 dark:text-blue-500 border-b-4 border-blue-600 dark:border-blue-500 pb-1 relative\">
              Software Engineer
              <span className=\"absolute -right-3 top-[10%] h-[80%] w-[2px] bg-slate-800 dark:bg-gray-100 animate-pulse\"></span>
            </span>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className=\"absolute bottom-8 flex justify-center w-full left-0 animate-bounce\">
           <Link href=\"#about\" className=\"w-12 h-12 rounded-full border border-slate-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all\">
             <span className=\"text-slate-400 dark:text-gray-400 text-xl font-bold\">?</span>
           </Link>
        </div>
      </main>\;

code = code.substring(0, sIdx) + replacement + code.substring(eIdx);
fs.writeFileSync('portifolio/app/page.tsx', code);
