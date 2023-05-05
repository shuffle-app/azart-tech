import s from '@/styles/main/TeamCard.module.css'


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
                        <p>{teamMember.excerpt}</p>
                        <a href="#">more detailis</a>
                    </div>
                </div>
                <div className={s.awards_block}>
                    <h3>Awards</h3>
                    <div className={s.awards}>
                        <div className={s.award}>
                            <h6>20+</h6>
                            <p>Lorem, ipsum.</p>
                        </div>
                        <div className={s.award}>
                            <h6>20+</h6>
                            <p>Lorem, ipsum.</p>
                        </div>
                        <div className={s.award}>
                            <h6>20+</h6>
                            <p>Lorem, ipsum.</p>
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