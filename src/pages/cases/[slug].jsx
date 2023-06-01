import { fetchProjects } from '@/api/queries/fetchProjects';
import Analytics from '@/components/cases/Analytics';
import Design from '@/components/cases/Design';
import Development from '@/components/cases/Development';
import Digital from '@/components/cases/Digital';
import Members from '@/components/cases/Members';
import Preview from '@/components/cases/Preview';
import Production from '@/components/cases/Production';
import Stack from '@/components/cases/Stack';
import Form from '@/components/home/Form';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Loader from '@/components/shared/Loader';

const Case = ({ initialData: cases, currentFile }) => {
  if (!cases) {
    return <Loader />;
  }

  return (
    <main>
      <Header />
      <Preview cases={cases} />
      {cases.stacks && <Stack cases={cases} />}
      <Analytics cases={cases} />
      <Design cases={cases} />
      {cases.development && <Development cases={cases} />}
      <Digital cases={cases} />
      <Production cases={cases} />
      {cases.members && <Members cases={cases} />}
      <Form />
      <Footer />
    </main>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const casesQuery = `
        query MyQuery {
            post(where: { slug: "${slug}" }) {
                title
                excerpt
                tags
                createdAt
                slug
                niche
                coverImage {
                    url
                }
                problem
                decision
                stacks
                previewImg {
                    url
                }
                also1
                also2
                alsoResult
                design1
                design2
                design3
                design4
                designResult
                development
                tech
                techTitle
                stacks2
                workingHours
                platforms
                digital
                digitalResult
                promoVideo1
                promoVideo2
                pitchPresentation {
                  url
                }
                reviewsName
                reviewsImg {
                    url
                }
                reviewsText
                imageSlider
                analytics01
                analytics02
                analyticsResult
                
            }
        }`;

  const casesResponse = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clh546yux60qk01t8c3g66zqz/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: casesQuery }),
    }
  );

  const data = await casesResponse.json();

  return {
    props: {
      initialData: data.data.post,
    },
  };
}

export async function getStaticPaths() {
  const projects = await fetchProjects({ onlySlugs: true });
  const paths = projects.map((post) => `/cases/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Case;
