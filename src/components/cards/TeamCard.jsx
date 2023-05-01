import s from '@/styles/main/TeamCard.module.css'

const TeamCard = () => {
    return (
        <div className={s.card}>
            <div className={s.card_header}>
                <div className={s.photo}>
                    
                </div>
                <div className={s.about}>
                    <h4>Name</h4>
                    <h5>digital marketing</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                <div className={s.tags_flex}>
                    <div><p>WEB</p></div>
                    <div><p>SMM</p></div>
                </div>
                <div className={s.tags_flex}>
                    <div><p>Digital</p></div>
                    <div><p>CRM</p></div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard