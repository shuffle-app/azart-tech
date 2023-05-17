import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/shared/Header';
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Websites from '@/components/home/Websites';
import Advantages from '@/components/home/Advantages';
import Product from '@/components/home/Product';
import Footer from '@/components/shared/Footer';
import Messenger from '@/components/home/Messenger';
import Stacks from '@/components/home/Stacks';
import Projects from '@/components/home/Projects';
import VideoAudit from '@/components/home/VideoAudit';
import Form from '@/components/home/Form';
import Question from '@/components/home/Question';
import StagesWork from '@/components/home/StagesWork';
import TeamSlider from '@/components/home/TeamSlider';
import Zoom from '@/components/shared/Zoom';
import Quiz from '@/components/shared/Quiz';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchProjects } from '@/api/queries/fetchProjects';
import { fetchTeamMembers } from '@/api/queries/fetchTeamMembers';

import accordionData from '../../public/accordionData.json';

import linesPic from '../../public/assets/images/3d-lines.png';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const projects = await fetchProjects();
  const teamMembers = await fetchTeamMembers();

  return {
    props: {
      projects,
      teamMembers,
    },
  };
}

export default function Home({ projects, teamMembers }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = window.localStorage.getItem('quiz') === 'true';

    if (alreadyShown) {
      return;
    }

    const timer = setTimeout(() => {
      if (window.localStorage.getItem('showHeroForm') === 'true') {
        return;
      }

      window.localStorage.setItem('quiz', 'true');

      setVisible(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Azart tech</title>
        <meta name="description" content="Azart Tech" />
      </Head>
      <main className="main_container">
        <div>
          <Image className="lines" src={linesPic} alt="Hero background" />
          <Header />
          <Section1 />
        </div>

        {visible && <Quiz />}

        <Section2 />
        <Websites />
        <div className="container">
          <Advantages />
          <Product />
          <Stacks stacks={accordionData} />
          <Messenger />
        </div>
        <Projects projects={projects} />
        <div className="container">
          <Zoom />
          <VideoAudit />
        </div>
        <StagesWork />
        <TeamSlider teamMembers={teamMembers} />
        <div className="container">
          <Question />
          <Form />
        </div>
        <Footer />
      </main>
    </>
  );
}
