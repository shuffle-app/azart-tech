import s from '@/styles/main/BestMember.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BestMember = () => {
  const router = useRouter();
  return (
    <section className={`container ${s.bm_section}`}>
      <div className={s.text_content}>
        <h1>
          Let`s meet <br className={s.br} /> with <span>our team</span>
        </h1>
        <p className={s.tp}>
          We are a professional team that includes various specialists in broad
          and narrow areas
        </p>
        <div className={s.scroll_down}>
          <h3>Our destinations</h3>
          <img src="./assets/icons/dw-btn.svg" alt="" />
        </div>
        <div className={s.tags}>
          <p>Development</p>
          <p>UX/UI</p>
          <p>Marketing</p>
        </div>
      </div>
      <div className={s.member_card}>
        <h2>Best Employee of the Month</h2>
        <div
          className={s.card}
          onClick={(e) => router.push(`/cv/Alexandra-Kotkina`)}
        >
          <div className={s.about}>
            <div className={s.people}>
              <img src="./assets/images/person.png" alt="name" />
              <div className={s.name}>
                <h3>Alexandra Kotkina</h3>
                <p>UX/UI designer</p>
              </div>
            </div>
            <div className={s.about_person}>
              <h2>Achievement</h2>
              <p>
                Active participation in the development of the interface for a
                new project, a manifestation of proactivity and professionalism
              </p>
              <Link href="/cv/Alexandra-Kotkina">more details</Link>
            </div>
          </div>
          <div className={s.marks}>
            <img src="./assets/images/activity.svg" alt="" />
            <img src="./assets/images/skills.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={s.glow1} />
      <div className={s.glow2} />
      <div className={s.glow3} />
    </section>
  );
};

export default BestMember;
