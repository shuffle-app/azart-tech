import s from '@/styles/main/Projects.module.css';
import CaseCard from '../cards/CaseCard';
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <section className={`${s.projects_section}`}>
      <h1 className="container">Recent projects</h1>
      {/* Карточки проектов */}
      <div className={`${s.slide} ${s.container}`}>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <CaseCard key={index} project={project} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Скролл бар слайдера, длинной линией */}
      <div className={`container ${s.slider_block}`}>
        <Link href="/cases">all projects</Link>
        <div className={s.slider_scroll}></div>
      </div>

      <div className={s.glow} />
      <div className={s.glow2} />
      <div className={s.glow3} />
    </section>
  );
}
