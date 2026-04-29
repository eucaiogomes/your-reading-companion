import {
  Search, Bell, ChevronDown, Bookmark, GraduationCap, Award, Download, Heart,
  Brain, Rocket, Headphones, LayoutGrid, Star, Clock, ArrowRight, ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import thumbAiBrain from '../assets/lector/thumb-ai-brain.jpg';
import thumbProductivity from '../assets/lector/thumb-productivity.jpg';
import thumbChatgpt from '../assets/lector/thumb-chatgpt.jpg';
import thumbSupport from '../assets/lector/thumb-support.jpg';
import thumbNotion from '../assets/lector/thumb-notion.jpg';
import thumbCharts from '../assets/lector/thumb-charts.jpg';
import thumbExcel from '../assets/lector/thumb-excel.jpg';
import thumbOmnichannel from '../assets/lector/thumb-omnichannel.jpg';
import thumbAutomation from '../assets/lector/thumb-automation.jpg';
import thumbDashboard from '../assets/lector/thumb-dashboard.jpg';
import thumbContinueAi from '../assets/lector/thumb-continue-ai.jpg';

// ---------- MOCK DATA ----------
const NAV_ITEMS = ['Explorar', 'Trilhas', 'Meus cursos', 'Suporte', 'Sobre a Lector'];

const TRAILS = [
  {
    id: 't1',
    icon: Brain,
    title: 'Inteligência Artificial\nna Prática',
    desc: 'Aprenda a usar IA para resolver problemas reais e ganhar eficiência.',
    courses: 12,
    hours: '18h',
    progress: 75,
    accent: 'from-blue-500/30 to-blue-500/0',
    iconColor: 'text-blue-400',
    barColor: 'bg-orange-500',
  },
  {
    id: 't2',
    icon: Rocket,
    title: 'Produtividade\ne Performance',
    desc: 'Métodos, ferramentas e hábitos para entregar mais e melhor.',
    courses: 10,
    hours: '14h',
    progress: 60,
    accent: 'from-orange-500/25 to-orange-500/0',
    iconColor: 'text-orange-400',
    barColor: 'bg-orange-500',
  },
  {
    id: 't3',
    icon: Headphones,
    title: 'Suporte que\nGera Valor',
    desc: 'Técnicas e práticas para oferecer suporte eficiente e encantar.',
    courses: 8,
    hours: '18h',
    progress: 40,
    accent: 'from-emerald-500/25 to-emerald-500/0',
    iconColor: 'text-emerald-400',
    barColor: 'bg-emerald-500',
  },
];

const HOT_COURSES = [
  { id: 'c1', tag: 'IA', title: 'Inteligência Artificial Aplicada', img: thumbAiBrain, rating: 4.8, time: '3h 20m' },
  { id: 'c2', tag: 'Produtividade', title: 'Gestão do Tempo e Foco Total', img: thumbProductivity, rating: 4.7, time: '2h 10m' },
  { id: 'c3', tag: 'IA', title: 'ChatGPT para Produtividade', img: thumbChatgpt, rating: 4.9, time: '2h 45m' },
  { id: 'c4', tag: 'Suporte', title: 'Comunicação Assertiva no Suporte', img: thumbSupport, rating: 4.8, time: '1h 40m' },
  { id: 'c5', tag: 'Ferramentas', title: 'Notion do Básico ao Avançado', img: thumbNotion, rating: 4.7, time: '3h 30m' },
];

const THEMES = [
  { id: 'th1', icon: Brain, title: 'Inteligência Artificial', desc: 'Explore conteúdos sobre IA, modelos, ferramentas e aplicações práticas.', color: 'text-blue-400' },
  { id: 'th2', icon: Rocket, title: 'Produtividade', desc: 'Métodos, ferramentas e estratégias para otimizar seu dia a dia.', color: 'text-orange-400' },
  { id: 'th3', icon: Headphones, title: 'Suporte', desc: 'Aprimore suas habilidades e ofereça uma experiência excepcional.', color: 'text-emerald-400' },
  { id: 'th4', icon: LayoutGrid, title: 'Outros temas', desc: 'Gestão, comunicação, ferramentas, dados e muito mais.', color: 'text-purple-400' },
];

const NEW_RELEASES = [
  { id: 'n1', title: 'IA Generativa para Negócios', cat: 'Curso · IA', img: thumbCharts, rating: 4.9, time: '2h 30m' },
  { id: 'n2', title: 'Excel Inteligente com IA', cat: 'Curso · Produtividade', img: thumbExcel, rating: 4.8, time: '2h 20m' },
  { id: 'n3', title: 'Atendimento Omnichannel na Prática', cat: 'Curso · Suporte', img: thumbOmnichannel, rating: 4.7, time: '2h 15m' },
  { id: 'n4', title: 'Automatizações com IA', cat: 'Curso · IA', img: thumbAutomation, rating: 4.8, time: '3h 10m' },
  { id: 'n5', title: 'Dashboards que Contam Histórias', cat: 'Curso · Ferramentas', img: thumbDashboard, rating: 4.8, time: '2h 40m' },
];

const FILTER_TAGS = ['Inteligência Artificial', 'Produtividade', 'Suporte', 'Ferramentas', 'Comunicação', 'Gestão'];

// ---------- COMPONENTS ----------

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#041433]/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_8px_24px_rgba(255,122,26,0.35)]">
            <span className="text-white font-display font-extrabold text-lg leading-none">L</span>
          </div>
          <span className="font-display font-extrabold text-white tracking-wide text-lg">LECTOR</span>
        </div>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                i === 0 ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              placeholder="Buscar cursos, trilhas..."
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <button className="relative p-2 rounded-full hover:bg-white/5 transition">
            <Bell className="w-5 h-5 text-white/70" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500" />
          </button>
          <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-white/5 transition">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/40 to-orange-500/40 border border-white/20" />
            <span className="text-sm text-white/80 font-medium hidden sm:inline">Olá, Lector</span>
            <ChevronDown className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl" style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 orbit-pattern opacity-90" />
      {/* decorative dots */}
      <div className="absolute top-10 right-1/3 w-1.5 h-1.5 rounded-full bg-orange-500" />
      <div className="absolute bottom-12 right-1/4 w-1 h-1 rounded-full bg-blue-400" />
      <div className="absolute top-1/2 left-[42%] w-1 h-1 rounded-full bg-orange-400/80" />

      <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 p-10 lg:p-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[0.2em] mb-5">
            <Sparkles className="w-3.5 h-3.5" /> VITRINE LECTOR
          </div>
          <h1 className="font-display font-extrabold text-white text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight">
            Aprenda, aplique e<br />transforme o seu dia.
          </h1>
          <p className="text-white/70 text-base mt-5 max-w-lg leading-relaxed">
            Cursos e trilhas práticas para impulsionar sua produtividade,
            aprofundar em Inteligência Artificial e evoluir no suporte.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button className="btn-primary inline-flex items-center gap-2">
              Explorar trilhas <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-ghost-light">Ver todos os cursos</button>
          </div>
        </div>

        {/* Progress card */}
        <div className="glass-dark rounded-2xl p-7 lg:ml-auto w-full max-w-sm">
          <div className="text-white/60 text-xs font-medium mb-5">Seu progresso geral</div>
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-24 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
                <circle
                  cx="50" cy="50" r="42" stroke="url(#g1)" strokeWidth="8" fill="none"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - 0.68)}`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF7A1A" />
                    <stop offset="100%" stopColor="#F2680D" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-orange-500" />
              </div>
            </div>
            <div>
              <div className="text-white font-display font-extrabold text-3xl leading-none">68%</div>
              <div className="text-white/50 text-sm mt-1">concluído</div>
            </div>
          </div>
          <div className="h-px bg-white/10 my-6" />
          <div className="grid grid-cols-3 gap-3 text-center">
            {[['Trilhas', '5'], ['Cursos', '18'], ['Horas', '32h']].map(([l, v]) => (
              <div key={l}>
                <div className="text-white/50 text-xs">{l}</div>
                <div className="text-white font-display font-bold text-xl mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, action = 'Ver todas' }: { title: string; action?: string }) {
  return (
    <div className="flex items-end justify-between mb-5">
      <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">{title}</h2>
      <a href="#" className="text-sm font-semibold text-slate-600 hover:text-orange-600 inline-flex items-center gap-1.5 transition">
        {action} <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

function TrailCard({ trail }: { trail: typeof TRAILS[number] }) {
  const Icon = trail.icon;
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#041433] p-7 group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(4,20,51,0.5)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${trail.accent}`} />
      <div className="absolute inset-0 orbit-pattern opacity-40" />
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
          <Icon className={`w-5 h-5 ${trail.iconColor}`} />
        </div>
        <h3 className="font-display font-extrabold text-white text-xl leading-tight whitespace-pre-line">
          {trail.title}
        </h3>
        <p className="text-white/60 text-sm mt-3 leading-relaxed">{trail.desc}</p>
        <div className="flex items-center gap-4 mt-7 text-xs text-white/50">
          <span><span className="text-white font-semibold">{trail.courses}</span> cursos</span>
          <span>Carga horária: <span className="text-white font-semibold">{trail.hours}</span></span>
          <div className="flex items-center gap-2 ml-auto">
            <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full ${trail.barColor}`} style={{ width: `${trail.progress}%` }} />
            </div>
            <span className="text-white font-semibold">{trail.progress}%</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function CourseCard({ course }: { course: typeof HOT_COURSES[number] }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
      <div className="relative aspect-[4/3] bg-[#041433] overflow-hidden">
        <img src={course.img} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041433]/40 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-blue-500/90 text-white uppercase">
          {course.tag}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-display font-bold text-slate-900 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
          {course.title}
        </h4>
        <div className="text-xs text-slate-500 mt-2">Curso</div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1 text-xs text-slate-700">
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span className="font-semibold">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" /> {course.time}
          </div>
        </div>
      </div>
    </article>
  );
}

function ThemeCard({ theme }: { theme: typeof THEMES[number] }) {
  const Icon = theme.icon;
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#041433] p-6 group cursor-pointer transition-all hover:-translate-y-1">
      <div className="absolute inset-0 orbit-pattern opacity-50" />
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
          <Icon className={`w-5 h-5 ${theme.color}`} />
        </div>
        <h4 className="font-display font-extrabold text-white text-lg leading-tight">{theme.title}</h4>
        <p className="text-white/55 text-xs mt-2 leading-relaxed">{theme.desc}</p>
        <a href="#" className="inline-flex items-center gap-1 text-orange-400 text-xs font-bold mt-5 group-hover:gap-2 transition-all">
          Ver cursos <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}

function ContinueCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-[var(--shadow-subtle)]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold tracking-[0.18em] text-slate-500">CONTINUE APRENDENDO</span>
        <a href="#" className="text-xs font-semibold text-orange-600 hover:text-orange-700">Ver tudo</a>
      </div>
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#041433] mb-4">
        <img
          src={thumbContinueAi}
          alt="Curso em andamento"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-500 text-white">
          Em andamento
        </span>
      </div>
      <h4 className="font-display font-bold text-slate-900 text-sm leading-snug">
        Fundamentos de Inteligência Artificial
      </h4>
      <div className="text-xs text-slate-500 mt-1">Curso · IA</div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-orange-500" style={{ width: '72%' }} />
        </div>
        <span className="text-xs font-bold text-slate-700">72%</span>
      </div>
    </div>
  );
}

function QuickAccess() {
  const items = [
    { icon: Bookmark, label: 'Meus cursos' },
    { icon: GraduationCap, label: 'Trilhas' },
    { icon: Award, label: 'Certificados' },
    { icon: Download, label: 'Downloads' },
    { icon: Heart, label: 'Favoritos' },
  ];
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-[var(--shadow-subtle)]">
      <div className="text-[10px] font-bold tracking-[0.18em] text-slate-500 mb-4">ACESSOS RÁPIDOS</div>
      <ul className="space-y-1">
        {items.map(({ icon: Icon, label }) => (
          <li key={label}>
            <a href="#" className="flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-600 transition group">
              <Icon className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
              <span className="font-medium">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-[var(--shadow-subtle)]">
      <div className="text-[10px] font-bold tracking-[0.18em] text-slate-500 mb-4">FILTRAR POR TEMA</div>
      <div className="flex flex-wrap gap-2">
        {FILTER_TAGS.map((tag, i) => (
          <button
            key={tag}
            className={`px-3 py-1.5 text-xs rounded-full border transition ${
              i === 0
                ? 'bg-orange-500/10 border-orange-500/30 text-orange-600 font-semibold'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <a href="#" className="inline-block mt-4 text-xs font-semibold text-orange-600 hover:text-orange-700">Ver todos</a>
    </div>
  );
}

function NewsCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#041433] p-6 text-white">
      <div className="absolute inset-0 orbit-pattern opacity-60" />
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
          <Sparkles className="w-5 h-5 text-blue-400" />
        </div>
        <h4 className="font-display font-extrabold text-lg leading-tight">
          Novos cursos<br />todas as semanas
        </h4>
        <p className="text-white/55 text-xs mt-3 leading-relaxed">
          Conteúdos atualizados para manter você sempre à frente.
        </p>
        <button className="mt-5 w-full btn-primary text-sm py-2.5">Ver novidades</button>
      </div>
    </div>
  );
}

function NewReleaseCard({ item }: { item: typeof NEW_RELEASES[number] }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
      <div className="relative aspect-[4/3] bg-[#041433] overflow-hidden">
        <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041433]/40 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-500 text-white uppercase tracking-wider">
          Novo
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-display font-bold text-slate-900 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">{item.title}</h4>
        <div className="text-xs text-slate-500 mt-2">{item.cat}</div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1 text-xs"><Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" /><span className="font-semibold text-slate-700">{item.rating}</span></div>
          <div className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3.5 h-3.5" />{item.time}</div>
        </div>
      </div>
    </article>
  );
}

function CtaBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#041433] p-6 lg:p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
      <div className="absolute inset-0 orbit-pattern opacity-50" />
      <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        <Brain className="w-5 h-5 text-blue-400" />
      </div>
      <div className="relative flex-1">
        <h3 className="font-display font-extrabold text-white text-xl">Não sabe por onde começar?</h3>
        <p className="text-white/60 text-sm mt-1">Responda algumas perguntas e receba uma trilha recomendada para você.</p>
      </div>
      <button className="relative btn-primary inline-flex items-center gap-2 shrink-0">
        Descobrir minha trilha <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function Footer() {
  const cols = [
    { title: 'Plataforma', links: ['Explorar', 'Trilhas', 'Meus cursos'] },
    { title: 'Suporte', links: ['Central de ajuda', 'Fale conosco', 'Políticas'] },
    { title: 'Institucional', links: ['Sobre a Lector', 'Para empresas', 'Blog'] },
  ];
  return (
    <footer className="bg-[#041433] text-white/70 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <span className="text-white font-display font-extrabold">L</span>
            </div>
            <span className="font-display font-extrabold text-white tracking-wide">LECTOR</span>
          </div>
          <p className="text-sm text-white/55 max-w-xs leading-relaxed">
            Plataforma completa de educação corporativa que transforma conhecimento em resultados.
          </p>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <div className="text-white font-bold text-sm mb-3">{c.title}</div>
            <ul className="space-y-2">{c.links.map(l => <li key={l}><a href="#" className="text-sm text-white/55 hover:text-orange-400 transition">{l}</a></li>)}</ul>
          </div>
        ))}
        <div>
          <div className="text-white font-bold text-sm mb-3">Newsletter</div>
          <p className="text-xs text-white/55 mb-3">Receba novidades e conteúdos exclusivos da Lector.</p>
          <div className="flex gap-2">
            <input placeholder="Seu e-mail" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50" />
            <button className="w-10 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition"><ArrowUpRight className="w-4 h-4 text-white" /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- PAGE ----------
export default function LectorVitrine() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 orbit-pattern opacity-40 pointer-events-none" />
      <div className="relative">
      <Header />
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 pb-12">
        {/* HERO + SIDEBAR ROW */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <Hero />
          <aside className="space-y-5"><ContinueCard /></aside>
        </div>

        {/* COMPLETO 3 (BARRAS) */}
        <section className="mt-12">
          <div className="mb-6">
            <div className="text-orange-500 text-xs font-bold tracking-[0.2em] mb-2">VITRINE LECTOR</div>
            <div className="flex items-end justify-between">
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight relative">
                Completo 3 (Barras)
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full" />
              </h2>
              <a href="#" className="text-sm font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1.5 transition">
                Ver tudo <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
            {[1, 2, 3, 4].map((n, i) => {
              const imgs = [thumbCharts, thumbExcel, thumbDashboard, thumbAutomation];
              return (
                <article key={n} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden bg-[#041433]">
                    <img src={imgs[i]} alt={`Treinamento ${n}`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-slate-900 text-[15px] leading-snug">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit {n}
                    </h4>
                    <div className="text-xs text-slate-500 mt-1">por John Doe</div>
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#041433] text-xs font-medium">
                        <GraduationCap className="w-3.5 h-3.5" /> Treinamentos
                      </span>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-slate-600">Progresso</span>
                          <span className="font-bold text-slate-700">70%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '70%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-slate-600">Aproveitamento</span>
                          <span className="font-bold text-slate-700">50%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
}
