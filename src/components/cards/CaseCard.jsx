import s from '@/styles/main/Projects.module.css';
import Link from 'next/link';


const CaseCard = ({ project }) => {
    return (
      <div className={s.card}>
        <div className={s.card_header}>
          <div className={s.card_text}>
            <h4>{project.title} <span>{project.niche}</span></h4>
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
            <Link href="/cases">more details</Link>
            <p>{new Date(project.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );
  };

  export default CaseCard