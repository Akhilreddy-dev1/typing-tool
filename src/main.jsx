import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const characters = [
  { id: 'ichigo', name: 'Ichigo Kurosaki', series: 'BLEACH', image: '/characters/ichigo.webp', mark: 'BANKAI', quote: 'A blade is only as strong as the resolve behind it.', color: '#c45538' },
  { id: 'sunjinwoo', name: 'Sung Jin-Woo', series: 'SOLO LEVELING', image: '/characters/sunjinwoo.webp', mark: 'LEVEL UP', quote: 'The next level is not given. It is earned one run at a time.', color: '#5f667d' },
  { id: 'gojo', name: 'Satoru Gojo', series: 'JUJUTSU KAISEN', image: '/characters/gojo.webp', mark: 'LIMITLESS', quote: 'Take the space you need. Then make every keystroke count.', color: '#5c7c79' },
  { id: 'tanjiro', name: 'Tanjiro Kamado', series: 'DEMON SLAYER', image: '/characters/tanjiro.jpg', mark: 'TOTAL FOCUS', quote: 'A steady hand can carry you farther than a hurried one.', color: '#a76e3e' },
];

const passages = [
  'A steady rhythm turns small practice into a skill you can trust.',
  'The quiet work is still work. Keep your hands relaxed and keep going.',
  'Good typing is less about rushing and more about knowing where to return.',
];

function App() {
  const [activeId, setActiveId] = useState('ichigo');
  const [passage, setPassage] = useState(passages[0]);
  const [typed, setTyped] = useState('');
  const [startedAt, setStartedAt] = useState(null);
  const [clock, setClock] = useState(Date.now());
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('typeanimeHistory') || '[]'));
  const [player, setPlayer] = useState(() => localStorage.getItem('typeanimePlayer') || '');
  const active = characters.find((character) => character.id === activeId);
  const completed = typed.length >= passage.length && typed === passage;
  const elapsed = startedAt ? Math.max((clock - startedAt) / 1000, 1) : 0;
  const errors = [...typed].filter((letter, index) => letter !== passage[index]).length;
  const wpm = Math.round((typed.length / 5) / (elapsed / 60)) || 0;
  const accuracy = typed.length ? Math.max(0, Math.round(((typed.length - errors) / typed.length) * 100)) : 100;
  const best = useMemo(() => Math.max(0, ...history.map((item) => item.wpm)), [history]);

  useEffect(() => {
    if (!startedAt || completed) return undefined;
    const id = window.setInterval(() => setClock(Date.now()), 500);
    return () => window.clearInterval(id);
  }, [startedAt, completed]);

  useEffect(() => {
    if (!completed) return;
    const result = { wpm, accuracy, character: activeId, date: Date.now() };
    const next = [result, ...history].slice(0, 20);
    setHistory(next);
    localStorage.setItem('typeanimeHistory', JSON.stringify(next));
  // A completed passage is a single event; reset is deliberately user-triggered.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed]);

  function chooseCharacter(id) {
    setActiveId(id);
    resetRun();
  }

  function resetRun() {
    setTyped('');
    setStartedAt(null);
    setClock(Date.now());
    setPassage(passages[Math.floor(Math.random() * passages.length)]);
  }

  function handleType(event) {
    if (!startedAt) {
      setStartedAt(Date.now());
      setClock(Date.now());
    }
    setTyped(event.target.value.slice(0, passage.length));
  }

  function savePlayer(event) {
    event.preventDefault();
    localStorage.setItem('typeanimePlayer', player.trim());
  }

  return (
    <main className="soul-page min-h-screen">
      <header className="soul-header mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a className="font-technical text-sm font-bold uppercase tracking-[0.24em]" href="#top">Type<span className="text-terracotta">Anime</span></a>
        <nav className="hidden gap-8 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 md:flex">
          <a href="#coaches">Coaches</a><a href="#practice">Practice</a><a href="#history">History</a>
        </nav>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Issue 002 / 2026</span>
      </header>

      <section id="top" className="hero-section mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pt-20">
        <div className="hero-copy self-center">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-terracotta">Soul reaper training / online</p>
          <h1 className="max-w-3xl font-display text-6xl leading-[.92] tracking-[-.06em] text-charcoal sm:text-8xl">Release your<br /><em className="text-terracotta">inner blade.</em></h1>
          <p className="mt-7 max-w-md font-technical text-base leading-7 text-ink/70">Four fighters. One passage. Cut through hesitation and leave your fastest mark.</p>
          <a className="mt-8 inline-flex border border-charcoal bg-charcoal px-6 py-3 font-mono text-[11px] uppercase tracking-[.16em] text-oat transition duration-200 hover:-translate-y-1 hover:bg-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta" href="#practice">Enter the dojo <span className="ml-5">↘</span></a>
        </div>
        <div className="relative min-h-[370px]">
          <div className="absolute right-3 top-2 h-64 w-64 rounded-full border border-terracotta/50 [transform:rotateX(65deg)_rotateZ(-20deg)]" />
          <div className="clay-card absolute left-8 top-12 w-[min(78%,310px)] rotate-[-4deg] bg-charcoal p-3 text-oat transition duration-300 hover:rotate-0">
            <img className="h-72 w-full object-cover object-top grayscale-[.12]" src={active.image} alt={`${active.name} portrait`} />
            <div className="flex items-end justify-between px-2 pb-1 pt-4"><span className="font-display text-2xl">{active.name}</span><span className="font-mono text-[9px] tracking-[.12em] text-oat/60">{active.mark}</span></div>
          </div>
          <div className="absolute bottom-2 right-0 w-40 border border-terracotta bg-terracotta px-4 py-5 text-oat shadow-[8px_8px_0_#242321]"><p className="font-display text-3xl">01</p><p className="mt-3 font-mono text-[9px] uppercase leading-4 tracking-[.12em]">Slow down.<br />Stay sharp.</p></div>
        </div>
      </section>

      <section id="coaches" className="border-y border-ink/20 bg-[#e5ddcc] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-terracotta">The roster</p><h2 className="mt-2 font-display text-4xl tracking-[-.04em]">Pick one voice.</h2></div><p className="max-w-xs text-right font-technical text-xs leading-5 text-ink/60">They are here to keep the pace honest, not to shout over it.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((character, index) => <button key={character.id} onClick={() => chooseCharacter(character.id)} className={`clay-card group relative overflow-hidden border border-ink/20 text-left transition duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-terracotta ${activeId === character.id ? 'ring-2 ring-terracotta' : ''}`}><img className="h-56 w-full object-cover object-top grayscale-[.15] transition duration-300 group-hover:grayscale-0" src={character.image} alt={`${character.name} portrait`} /><div className="bg-oat p-4"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-terracotta">0{index + 1} / {character.series}</p><h3 className="mt-2 font-display text-2xl">{character.name}</h3></div></button>)}
          </div>
        </div>
      </section>

      <section id="practice" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div><div className="mb-7 flex items-end justify-between border-b border-ink/20 pb-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-terracotta">Practice / {active.series}</p><h2 className="mt-2 font-display text-5xl tracking-[-.05em]">The daily passage</h2></div><button onClick={resetRun} className="font-mono text-[10px] uppercase tracking-[.15em] underline underline-offset-4">New passage</button></div>
            <p className="mb-4 font-technical text-sm text-ink/60">{active.quote}</p>
            <div className="clay-card bg-[#f5efe3] p-6 sm:p-10"><div className="mb-8 font-mono text-lg leading-[2] tracking-[-.04em] sm:text-2xl">{passage.split('').map((letter, index) => <span key={`${letter}-${index}`} className={index < typed.length ? (typed[index] === letter ? 'text-terracotta' : 'bg-terracotta/20 text-terracotta') : index === typed.length ? 'border-b-2 border-terracotta text-charcoal' : 'text-ink/35'}>{letter === ' ' ? '\u00a0' : letter}</span>)}</div><textarea autoFocus value={typed} onChange={handleType} disabled={completed} className="min-h-28 w-full resize-none border-b border-ink/30 bg-transparent p-2 font-mono text-base text-charcoal outline-none placeholder:text-ink/30 focus:border-terracotta" placeholder="Start typing here..." aria-label="Type the passage" /><div className="mt-6 flex flex-wrap gap-8 border-t border-ink/15 pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-ink/60"><span><b className="text-2xl text-charcoal">{wpm}</b> WPM</span><span><b className="text-2xl text-charcoal">{accuracy}%</b> accuracy</span><span><b className="text-2xl text-charcoal">{errors}</b> errors</span><span><b className="text-2xl text-charcoal">{Math.round(elapsed)}s</b> time</span></div></div>
          </div>
          <aside className="border-l border-ink/20 pl-6"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-terracotta">Your mark</p><p className="mt-4 font-display text-7xl text-charcoal">{best}</p><p className="font-mono text-[10px] uppercase tracking-[.12em] text-ink/60">best WPM</p><form onSubmit={savePlayer} className="mt-12"><label className="font-mono text-[10px] uppercase tracking-[.12em] text-ink/60" htmlFor="player">Name for the wall</label><input id="player" value={player} onChange={(event) => setPlayer(event.target.value)} className="mt-3 w-full border-b border-ink/30 bg-transparent py-2 font-technical outline-none focus:border-terracotta" placeholder="your name" /></form></aside>
        </div>
      </section>

      <section id="history" className="border-t border-ink/20 bg-charcoal px-6 py-16 text-oat lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex items-end justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-terracotta">Notebook</p><h2 className="mt-2 font-display text-4xl">Recent attempts</h2></div><span className="font-mono text-[10px] uppercase tracking-[.15em] text-oat/50">{history.length} logged</span></div><div className="mt-8 divide-y divide-oat/15 border-y border-oat/15">{history.slice(0, 5).map((item, index) => <div key={`${item.date}-${index}`} className="grid grid-cols-[40px_1fr_auto] items-center gap-4 py-4 font-mono text-xs"><span className="text-terracotta">0{index + 1}</span><span>{characters.find((character) => character.id === item.character)?.name || 'Unknown coach'}</span><strong>{item.wpm} WPM <small className="ml-3 font-normal text-oat/50">{item.accuracy}%</small></strong></div>)}{history.length === 0 && <p className="py-8 font-technical text-sm text-oat/50">Your first clean run will land here.</p>}</div></div></section>
      <footer className="mx-auto flex max-w-7xl justify-between px-6 py-7 font-mono text-[9px] uppercase tracking-[.16em] text-ink/50 lg:px-10"><span>TypeAnime / Practice slowly</span><span>Made for the next run</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
