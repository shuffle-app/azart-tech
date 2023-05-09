import s from '@/styles/main/Projects.module.css';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className={s.card}>
      <div className={s.card_header}>
        <div className={s.card_text}>
          <h4>{project.title}</h4>
          <p>{project.excerpt}</p>
        </div>
        <div className={s.card_tags}>
          {project.tags.tag.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
      <div className={s.preview}>
        <img src={project.coverImage.url} alt="Project preview" />
        <div className={s.detailis}>
          <Link href="/cases/shuffle-app">more detailis</Link>
          <p>{new Date(project.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default function Projects({ projects }) {
  return (
    <section className={`${s.projects_section}`}>
      <h1 className="container">Resent projects</h1>
      {/* Карточки проектов */}
      <div className={`${s.slide} ${s.container}`}>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Скролл бар слайдера, длинной линией */}
      <div className={`container ${s.slider_block}`}>
        <a href="">all project</a>
        <div className={s.slider_scroll}></div>
      </div>

      <div className={s.glow}/>
      <div className={s.glow2}/>
      <div className={s.glow3}/>
    </section>
  );
}
