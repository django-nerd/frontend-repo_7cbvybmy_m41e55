import React from 'react';
import { Rocket, BarChart3, TrendingUp } from 'lucide-react';

const specialties = [
  { title: 'Social Media', desc: 'Strategy, content calendars, growth loops' },
  { title: 'Partnerships', desc: 'Brand collaborations and co-marketing' },
  { title: 'CRM', desc: 'Lifecycle messaging and retention' },
  { title: 'Content Strategy', desc: 'Narratives that drive conversions' },
  { title: 'Audience Analysis', desc: 'Insights, segmentation, targeting' },
];

const metrics = [
  {
    icon: Rocket,
    value: '1,702%',
    label: 'Increase in Reach',
    note: 'Project Growlab',
    accent: 'from-red-500 to-orange-500',
  },
  {
    icon: BarChart3,
    value: '1.8M',
    label: 'Video Views',
    note: 'Viral Content Creation',
    accent: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Increase in Sales',
    note: 'BuzzTalk Asia',
    accent: 'from-red-500 to-orange-500',
  },
];

export default function AboutAndAchievements() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Digital Marketing Professional with E-Commerce Logistics background. I build
              measurable, profitable marketing systems end-to-end — from research and
              strategy to creative, execution, and optimization.
            </p>
            <p className="mt-3 italic text-neutral-600">
              "Passionate about innovative startups and AI, combining technical skills with
              creative problem-solving."
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {specialties.map((s) => (
                <div key={s.title} className="p-4 rounded-lg border border-neutral-200">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-neutral-600 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Key Achievements</h3>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 shadow-sm"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-r ${m.accent} text-white`}>
                    <m.icon size={18} />
                  </div>
                  <div className="mt-3 text-2xl font-bold tracking-tight">{m.value}</div>
                  <div className="text-sm text-neutral-600">{m.label}</div>
                  <div className="text-xs text-neutral-500 mt-1">{m.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
