import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Growlab',
    role: 'Social Media Intern',
    impact: 'Planned and executed content resulting in a 1,702% increase in reach and 231% rise in profile visits within one month.',
  },
  {
    company: 'Teman Ambiss',
    role: 'Social Media Marketing Intern',
    impact: 'Executing content schedule, resulted in a 276% increase in reach and 32% increase in profile visits.',
  },
  {
    company: 'BuzzTalk Asia',
    role: 'Social Media Specialist',
    impact: "Guided the brand's Instagram to a growth spurt of nearly 150%, leading to a 45% increase in sales.",
  },
  {
    company: 'DailySocial.id',
    role: 'Contributor',
    impact: 'Covered digital business stories with actionable insights for founders and operators.',
  },
  {
    company: 'Waphel Official',
    role: 'Marketing',
    impact: 'Supported campaign execution and social content for brand awareness and conversions.',
  },
  {
    company: 'Life at UMN',
    role: 'Content',
    impact: 'Created engaging campus content formats and growth experiments.',
  },
];

const skills = [
  { name: 'Trello', type: 'Project Management' },
  { name: 'Notion', type: 'Project Management' },
  { name: 'Canva', type: 'Creative' },
  { name: 'Google Analytics', type: 'Analytics & Strategy' },
  { name: 'Google Trends', type: 'Analytics & Strategy' },
  { name: 'HubSpot', type: 'Analytics & Strategy' },
  { name: 'Gemini', type: 'AI' },
  { name: 'Claude', type: 'AI' },
  { name: 'SEO', type: 'Other' },
  { name: 'Copywriting', type: 'Other' },
  { name: 'Content Strategy', type: 'Other' },
];

export default function ExperienceAndSkills() {
  return (
    <section id="experience" className="w-full py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <Briefcase className="text-orange-600" /> Experience & Projects
            </h2>
            <ol className="mt-6 space-y-6 border-l border-neutral-200 pl-6">
              {experiences.map((exp, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                  <div className="font-semibold">{exp.company} — {exp.role}</div>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{exp.impact}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="skills">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Skills & Tools</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((s) => (
                <div key={s.name} className="p-4 rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{s.name}</span>
                    <CheckCircle2 className="text-green-600" size={18} />
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">{s.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
