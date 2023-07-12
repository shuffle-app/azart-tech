import Form from "@/components/home/Form"
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import BestMember from "@/components/teamPage/BestMember"
import s from '@/styles/main/TeamSlider.module.css'
import c from '@/styles/main/TeamCard.module.css'
import ScrollableContainer from "@/components/common/scrollable/ScrollableContainer"
import Link from "next/link"
import { useRouter } from "next/router"

export async function getStaticProps() {
  
    const teamQuery = `query MyQuery {
      posts {
        name
        excerpt
        profession
        slug
        tags
        category
        coverImage {
          url
        }
        awards {
          html
        }
        awardsImg {
          url
        }
      }
    }`;
  
    const teamResponse = await fetch(
      'https://api-us-west-2.hygraph.com/v2/clh4zdcwq5s5p01ue7mgtbapo/master',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ query: teamQuery }),
      }
    );
  
    const teamData = await teamResponse.json();
    const teamMembers = teamData.data.posts;
  
    return {
      props: {
        teamMembers,
      },
    };
  }
  
  const truncateText = (text, maxLength = 4) => {
    const words = text.split(' ');
    return words.length > maxLength
      ? words.slice(0, maxLength).join(' ') + '...'
      : text;
  };

const TeamPage = ({ teamMembers }) => {
  const router = useRouter();
    return (
      <main>
        <div className="main_container">
        <Header />
          <BestMember />
  
          <section className={`${s.team_section}`}>
            <h1 className={`container ${s.h1}`}>Development</h1>
            <ScrollableContainer>
              {teamMembers &&
                teamMembers
                  .filter((teamMember) => teamMember.category.includes("development"))
                  .map((teamMember, index) => (
                    <div key={index} className={c.card}>
                        <div onClick={(e) => router.push(`/cv/${teamMember.slug}`)} className={c.card_header}>
                          <div className={s.photo}>
                            <img src={teamMember.coverImage?.url} alt="" />
                          </div>
                          <div className={c.about}>
                            <h4>{teamMember.name}</h4>
                            <h5>{teamMember.profession}</h5>
                            <p>{truncateText(teamMember.excerpt)}</p>
                            <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                          </div>
                        </div>
                        <div className={c.awards_block}>
                          <h3>Awards</h3>
                          <div className={s.rewards_block}>
                              <div className={s.rew}>
                                  {
                                      teamMember.awardsImg === null ? (<p className={c.comming}>They are not there yet, but they will definitely be soon! 💪</p>)
                                      : (<img className={c.award_image} src={teamMember.awardsImg.url}/>)
                                  }
                              </div>
                          </div>
                      </div>
                      <div className={c.tags}>
                        {teamMember.tags &&
                          teamMember.tags.tagss.map((tag, index) => (
                            <button className={c.tag} key={index}>
                              {tag}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
            </ScrollableContainer>
          </section>


          <section className={`${s.team_section}`}>
            <h1 className={`container ${s.h1}`}>UX/UI</h1>
            <ScrollableContainer>
              {teamMembers &&
                teamMembers
                  .filter((teamMember) => teamMember.category.includes("design"))
                  .map((teamMember, index) => (
                    <div key={index} className={c.card}>
                        <div onClick={(e) => router.push(`/cv/${teamMember.slug}`)} className={c.card_header}>
                          <div className={s.photo}>
                            <img src={teamMember.coverImage?.url} alt="" />
                          </div>
                          <div className={c.about}>
                            <h4>{teamMember.name}</h4>
                            <h5>{teamMember.profession}</h5>
                            <p>{truncateText(teamMember.excerpt)}</p>
                            <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                          </div>
                        </div>
                        <div className={c.awards_block}>
                          <h3>Awards</h3>
                          <div className={s.rewards_block}>
                              <div className={s.rew}>
                                  {
                                      teamMember.awardsImg === null ? (<p className={c.comming}>They are not there yet, but they will definitely be soon! 💪</p>)
                                      : (<img src={teamMember.awardsImg.url}/>)
                                  }
                              </div>
                          </div>
                      </div>
                      <div className={c.tags}>
                        {teamMember.tags &&
                          teamMember.tags.tagss.map((tag, index) => (
                            <button className={c.tag} key={index}>
                              {tag}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
            </ScrollableContainer>
          </section>

          <section className={`${s.team_section}`}>
            <h1 className={`container ${s.h1}`}>Marketing</h1>
            <ScrollableContainer>
              {teamMembers &&
                teamMembers
                  .filter((teamMember) => teamMember.category.includes("marketing"))
                  .map((teamMember, index) => (
                    <div key={index} className={c.card}>
                        <div onClick={(e) => router.push(`/cv/${teamMember.slug}`)} className={c.card_header}>
                          <div className={s.photo}>
                            <img src={teamMember.coverImage?.url} alt="" />
                          </div>
                          <div className={c.about}>
                            <h4>{teamMember.name}</h4>
                            <h5>{teamMember.profession}</h5>
                            <p>{truncateText(teamMember.excerpt)}</p>
                            <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                          </div>
                        </div>
                        <div className={c.awards_block}>
                          <h3>Awards</h3>
                          <div className={s.rewards_block}>
                              <div className={s.rew}>
                                  {
                                      teamMember.awardsImg === null ? (<p className={c.comming}>They are not there yet, but they will definitely be soon! 💪</p>)
                                      : (<img src={teamMember.awardsImg.url}/>)
                                  }
                              </div>
                          </div>
                      </div>
                      <div className={c.tags}>
                        {teamMember.tags &&
                          teamMember.tags.tagss.map((tag, index) => (
                            <button className={c.tag} key={index}>
                              {tag}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
            </ScrollableContainer>
          </section>

          
  
          <Form />
        </div>
        <Footer />
      </main>
    );
  };

  export default TeamPage
