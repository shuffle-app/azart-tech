import s from '@/styles/main/ResentProject.module.css';
import Header from '@/components/shared/Header';
import Link from 'next/link';
import c from '@/styles/main/Projects.module.css';
import Footer from '@/components/shared/Footer';
import Form from '@/components/home/Form';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const FormattedDate = ({ date }) => {
  return <p>{format(new Date(date), 'd MMM. yyyy').toLowerCase()}</p>;
};

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export async function getStaticProps() {
  const query = `query Assets {
      posts {
        title
        excerpt
        niche
        tags
        date
        category
        slug
        coverImage {
          url
        }
      }
    }`;

  const response = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clh546yux60qk01t8c3g66zqz/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await response.json();
  const projects = data.data.posts;

  return {
    props: {
      projects,
    },
  };
}

const CasePage = ({ projects }) => {
  const [menu, setMenu] = useState(true);
  const nodeRef = useRef(null);

  const router = useRouter();
  return (
    <main className="main_container">
      <Header />
      <section className="container">
        <section className={` ${s.bm_section}`}>
          <div className={s.text_content}>
            <h1>
              Pay attention <br />
              to <span>our work</span>
            </h1>
            <p className={s.p}>
              Here are collected cases on various topics. We specialize not only
              in IT, but also in other similar areas
            </p>
            <div>
              <h3>Our destinations</h3>
            </div>
            <div className={s.tags}>
              <p>
                <a href="/cases#digital">Digital</a>
              </p>
              <p>
                <a href="/cases#it">IT</a>
              </p>
              <p>
                <a href="/cases#services">Services</a>
              </p>
            </div>
          </div>
          <div className={s.project_card}>
            <h2>Recent project</h2>
            <div className={s.card}>
              <div className={s.card_text}>
                <h3>Shuffle start-up</h3>
                <p>
                  an honest and unique application that will suggest you find
                  places, people, food, entertainment, etc.
                </p>
                <div className={s.card_tags}>
                  <p>UX/UI</p>
                  <p>app</p>
                  <p>dev</p>
                </div>
                <div className={s.card_ft}>
                  <Link href={`/cases/shuffle-start-up`}>more details</Link>
                  <p>28 jan. 2023</p>
                </div>
              </div>
              <img src="./assets/img/shuffle.svg" alt="" />
            </div>
          </div>

          <div className={s.glow1} />
          <div className={s.glow2} />
          <div className={s.glow3} />
        </section>

        <section className={s.mobile_card}>
          <div className={c.card}>
            <div className={c.card_header}>
              <div className={c.card_text}>
                <h4>
                  Shuffle<span>start-up</span>
                </h4>
                <p>
                  an honest and unique application that will suggest you find
                  places, people, food, entertainment, etc.
                </p>
              </div>
              <div className={c.card_tags}>
                <p>UX/UI</p>
                <p>app</p>
                <p>dev</p>
              </div>
            </div>
            <div className={c.preview}>
              <img src="./assets/img/shuffle-1.png" alt="Project preview" />
              <div className={c.detailis}>
                <Link href={`/cases/shuffle-start-up`}>more details</Link>
                <p>28 jan. 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className={s.category}>
          <h1 id="it">IT</h1>
          <div className={s.case_cards}>
            {projects &&
              projects
                .filter((project) => project.category.includes('IT'))
                .map((project, index) => (
                  <div
                    key={index}
                    className={c.card}
                    onClick={(e) => router.push(`/cases/${project.slug}`)}
                  >
                    <div className={c.card_header}>
                      <div className={c.card_text}>
                        <h4>
                          {project.title} <span>{project.niche}</span>
                        </h4>
                        <p>{project.excerpt}</p>
                      </div>
                      <div className={c.card_tags}>
                        {project.tags.tag.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                      </div>
                    </div>
                    <div className={c.preview}>
                      <img src={project.coverImage.url} alt="Project preview" />
                      <div className={c.detailis}>
                        <Link href={`/cases/${project.slug}`}>
                          more details
                        </Link>
                        <FormattedDate date={project.date} />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        <section className={s.category}>
          <h1 id="digital">Digital</h1>
          <div className={s.case_cards}>
            {projects &&
              projects
                .filter((project) => project.category.includes('digital'))
                .map((project, index) => (
                  <div
                    key={index}
                    className={c.card}
                    onClick={(e) => router.push(`/cases/${project.slug}`)}
                  >
                    <div className={c.card_header}>
                      <div className={c.card_text}>
                        <h4>
                          {project.title} <span>{project.niche}</span>
                        </h4>
                        <p>{project.excerpt}</p>
                      </div>
                      <div className={c.card_tags}>
                        {project.tags.tag.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                      </div>
                    </div>
                    <div className={c.preview}>
                      <img src={project.coverImage.url} alt="Project preview" />
                      <div className={c.detailis}>
                        <Link href={`/cases/${project.slug}`}>
                          more details
                        </Link>
                        <FormattedDate date={project.date} />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        <section className={s.category}>
          <h1 id="services">Services</h1>
          <section className={s.case_cards}>
            {projects &&
              projects
                .filter((project) => project.category.includes('service'))
                .map((project, index) => (
                  <div
                    key={index}
                    className={c.card}
                    onClick={(e) => router.push(`/cases/${project.slug}`)}
                  >
                    <div className={c.card_header}>
                      <div className={c.card_text}>
                        <h4>
                          {project.title} <span>{project.niche}</span>
                        </h4>
                        <p>{project.excerpt}</p>
                      </div>
                      <div className={c.card_tags}>
                        {project.tags.tag.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                      </div>
                    </div>
                    <div className={c.preview}>
                      <img src={project.coverImage.url} alt="Project preview" />
                      <div className={c.detailis}>
                        <Link href={`/cases/${project.slug}`}>
                          more details
                        </Link>
                        <FormattedDate date={project.date} />
                      </div>
                    </div>
                  </div>
                ))}
          </section>
        </section>
      </section>
      <Form />
      <Footer />
    </main>
  );
};

export default CasePage;
