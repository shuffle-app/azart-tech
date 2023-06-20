import s from '@/styles/cases/Members.module.css';
import Image from 'next/image';

const Members = ({ cases }) => {
  if (!cases.members) {
    return null;
  }

  return (
    <section className="container">
      <h3 className={s.h3}>Members</h3>
      <div className={s.members}>
        {cases.members[0].members.map((member, index) => {
          return (
            <div className={s.member} key={index}>
              <Image src={member.photo} alt="" width={60} height={60} />
              <div>
                <h5>{member.name}</h5>
                <p>{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className={s.member}>
              <img src="./assets/images/stanislav.svg" alt="" />
              <div>
                <h5>Name Name</h5>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className={s.member}>
              <img src="./assets/images/stanislav.svg" alt="" />
              <div>
                <h5>Name Name</h5>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className={s.member}>
              <img src="./assets/images/stanislav.svg" alt="" />
              <div>
                <h5>Name Name</h5>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className={s.member}>
              <img src="./assets/images/stanislav.svg" alt="" />
              <div>
                <h5>Name Name</h5>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className={s.member}>
              <img src="./assets/images/stanislav.svg" alt="" />
              <div>
                <h5>Name Name</h5>
                <p>Lorem, ipsum.</p>
              </div> */}
      {/* </div> */}

      <div className={s.reviews_block}>
        <div>
          <h4 className={s.h4}>Reviews</h4>
          <div className={s.reviews_header}>
            <img src={cases.reviewsImg?.url} alt="" />
            <button>
              Watch video <img src="./assets/icons/play-btn.svg" alt="" />
            </button>
            <button>
              Listen voice <img src="./assets/icons/voice.svg" alt="" />
            </button>
          </div>
          <div className={s.review}>
            <h4>{cases.reviewsName}</h4>
            <p>{cases.reviewsText}</p>
          </div>
        </div>
        <img className={s.img} src="./assets/images/6047.svg" alt="" />
      </div>
    </section>
  );
};

export default Members;
