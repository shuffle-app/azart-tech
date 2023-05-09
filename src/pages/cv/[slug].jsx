import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import s from '@/styles/cv/CV.module.css'

const TeamMemberPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchTeamMember(slug);
    }
  }, [slug]);

  const fetchTeamMember = async (slug) => {
    
    const teamQuery = `
      query MyQuery {
        post(where: { slug: "${slug}" }) {
          name
          profession
          excerpt
          experiences
          experience
          workYears
          aboutMe
          category
          coverImage {
            url
          }
          awards {
            html
          }
          advancedSkills
          skills
          rewards
        }
      }`;

    const teamResponse = await fetch(
      "https://api-us-west-2.hygraph.com/v2/clh4zdcwq5s5p01ue7mgtbapo/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: teamQuery }),
      }
    );

    const teamData = await teamResponse.json();
    setTeamMember(teamData.data.post);
  };

  return (
    <>
      <Header/>
      {teamMember && (
        <div className={`container ${s.cv_section}`}>

            <div className={s.person_header}>
                <div className={s.header_logo}>
                    <img src={teamMember.coverImage?.url} alt="" />
                    <div>
                        <div className={s.name_block}>
                            <h1>{teamMember.name}</h1>
                            <h2>{teamMember.profession}</h2>
                        </div>
                        <h3>{teamMember.excerpt}</h3>
                    </div>
                </div>
                <div className={s.person_link}>
                    <div className={s.contact}>
                        <p>Contact</p>
                    </div>
                    <div className={s.social}>
                        <p>Social media</p>
                    </div>
                </div>
            </div>

            <div className={s.experience_block}>
                <div className={s.exp_header}>
                    {teamMember.experience && (
                      <>
                        <h3>Work experience <span>{teamMember.experience} years</span></h3>
                        <p>{teamMember.workYears}</p>
                      </>
                    )}
                </div>
                {teamMember.experiences && teamMember.experiences.jobs && teamMember.experiences.jobs.map((job, index) => (
                  <div key={index} className={s.experience}>
                    <div>
                        <h4>{job.title}</h4>
                        <h5>{job.duration}</h5>
                    </div>
                    <p>{job.description}</p>
                  </div>
                ))}
            </div>

            <div className={s.about_block}>
                <div className={s.about}>
                    <h2>About me</h2>
                    <p>{teamMember.aboutMe}</p>
                    <div className={s.skills_block}>
                        <h3>
                            <span>Hard & </span>
                            <span>Soft </span>
                            skills
                        </h3>
                        <div className={s.skills}>
                            {teamMember.skills && teamMember.skills.hard && teamMember.skills.hard.map((skill, index) => (
                                <p key={index} className={s.hard}>{skill}</p>
                            ))}
                            {teamMember.skills && teamMember.skills.soft && teamMember.skills.soft.map((skill, index) => (
                                <p key={index} className={s.soft}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={s.about_image}>
                    <img src="./assets/images/cv-photo.png" alt="" />
                </div>
            </div>

            <div className={s.more_info}>
                <div className={s.advanced}>
                    <h2><span>Advanced</span> skills</h2>
                    <div>
                        <div className={s.adv_blocks}>
                            <h3>Languages</h3>
                            <div className={s.languages}>
                                {teamMember.advancedSkills && teamMember.advancedSkills.advancedLanguages && teamMember.advancedSkills.advancedLanguages.map((lang, index) => (
                                <p key={index}>
                                    {lang.language} <span>{lang.level}</span>
                                </p>
                                ))}
                            </div>
                        </div>

                        {teamMember.advancedSkills && teamMember.advancedSkills.advancedEducation && teamMember.advancedSkills.advancedEducation.length > 0 && (
                            <div className={s.adv_blocks}>
                                <h3>Education</h3>
                                <div className={s.education}>
                                    {teamMember.advancedSkills.advancedEducation.map((edu, index) => (
                                        <div key={index}>
                                            <p>{edu.description}</p>
                                            <span>{edu.p}</span>
                                        </div>
                                    ))}
                                </div>  
                            </div>
                        )}

                        {teamMember.advancedSkills && teamMember.advancedSkills.additionalEducations && teamMember.advancedSkills.additionalEducations.length > 0 && (
                            <div className={s.adv_blocks}>
                                <h3>Additional education</h3>
                                <div className={s.education}>
                                    {teamMember.advancedSkills.additionalEducations.map((edu, index) => (
                                        <div key={index}>
                                            <p>{edu.education}</p>
                                            <span>{edu.p}</span>
                                        </div>
                                    ))}
                                </div>  
                            </div>
                        )}

                    </div>
                </div>
                <div className={s.awards}>
                    <h2>Awards & Achievements</h2>
                    <div>
                        <div className={s.awards_content}>
                            {teamMember.awards?.html ? (
                                <div dangerouslySetInnerHTML={{ __html: teamMember.awards.html }}></div>
                            ) : ""}
                        </div>
                        <div className={s.rewards_block}>
                            <div className={s.rew}>
                                {teamMember.rewards && teamMember.rewards.reward && teamMember.rewards.reward.length > 0 ? (teamMember.rewards.reward.map((reward, index) => (
                                    <div key={index} className={s.rewards}>
                                        <span>{reward.number}</span>
                                        <p>{reward.text}</p>
                                    </div>
                                    
                                ))
                                ) : (
                                <p className={s.comming}>They are not there yet, but they will definitely be soon! 💪</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      )}
      <Footer/>
    </>
  );
};

export default TeamMemberPage;
