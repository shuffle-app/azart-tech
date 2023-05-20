import s from '@/styles/main/Projects.module.css';
import { useMounted } from '@/utils/hooks/useMounted';
import Link from 'next/link';
import { format } from 'date-fns';

const FormattedDate = ({ date }) => {
  return <p>{format(new Date(date), 'd MMM. yyyy').toLowerCase()}</p>;
};

const CaseCard = ({ project }) => {
  const mounted = useMounted();

  return (
    <div className={s.card}>
      <div className={s.card_header}>
        <div className={s.card_text}>
          <h4>
            {project.title} <span>{project.niche}</span>
          </h4>
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
          <Link href={`/cases/${project.slug}`}>more details</Link>
          {mounted && <FormattedDate date={project.date} />}
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
