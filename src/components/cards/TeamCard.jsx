import s from '@/styles/main/TeamCard.module.css'
import Link from 'next/link';


const truncateText = (text, maxLength = 4) => {
    const words = text.split(' ');
    return words.length > maxLength
      ? words.slice(0, maxLength).join(' ') + '...'
      : text;
  };

const TeamCard = ({teamMembers}) => {
    return (
        <>
        {teamMembers && teamMembers.map((teamMember, index) => (
            <div key={index} className={s.card}>
                <div className={s.card_header}>
                    <div className={s.photo}>
                        <img src={teamMember.coverImage?.url} alt="" />
                    </div>
                    <div className={s.about}>
                        <h4>{teamMember.name}</h4>
                        <h5>{teamMember.profession}</h5>
                        <p>{truncateText(teamMember.excerpt)}</p>
                        <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                    </div>
                </div>
                <div className={s.awards_block}>
                    <h3>Awards</h3>
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
                <div className={s.tags}>
                    {teamMember.tags &&
                        teamMember.tags.tagss.map((tag, index) => (
                        <button className={s.tag} key={index}>
                            {tag}
                        </button>
                        ))}
                </div>
            </div>
          ))}
        </>
    )
}

export default TeamCard


