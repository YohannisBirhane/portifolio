'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, CalendarDays, BookOpen } from 'lucide-react';

type EducationEntry = {
  id?: number;
  institution: string;
  department: string;
  year_level: string;
  description?: string;
};

const fallbackEducation: EducationEntry[] = [
  {
    institution: 'Debre Berhan University',
    department: 'Software Engineering',
    year_level: '3rd Year',
    description: 'Yohannis Birhane is currently studying software engineering and building practical web applications.',
  },
];

export default function EducationPage() {
  const [education, setEducation] = useState<EducationEntry[]>(fallbackEducation);

  useEffect(() => {
    const loadEducation = async () => {
      try {
        const response = await fetch('/api/education');
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setEducation(data);
        }
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    };

    loadEducation();
  }, []);

  return (
    <main className="min-h-screen px-6 py-24 bg-transparent text-slate-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500 font-semibold mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Education</h1>
          <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and current study details for Yohannis Birhane.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${index}`}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 to-cyan-400"></div>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg shadow-blue-500/10 overflow-hidden shrink-0 flex items-center justify-center p-2">
                  <Image
                    src="/images/universityLogo1.jpg"
                    alt="Debre Berhan University logo"
                    width={72}
                    height={72}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{item.institution}</h2>
                  <div className="mt-4 space-y-3 text-slate-700 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <Building2 size={18} className="text-blue-500" />
                      <span>{item.department}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarDays size={18} className="text-cyan-400" />
                      <span>{item.year_level}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen size={18} className="text-emerald-400 mt-1" />
                      <span>{item.description || 'Focused on software engineering fundamentals, web development, and project-based learning.'}</span>
                    </div>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="inline-flex px-6 py-3 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}