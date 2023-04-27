import s from '@/styles/main/Projects.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = () => {
    return (
        <div className={s.card}>
            <div className={s.card_header}>
                <div className={s.card_text}>
                    <h4>Shuffle start-up</h4>
                    <p>an honest and unique application that will suggest you find places, people, food, entertainment, etc.</p>
                </div>
                <div className={s.card_tags}>
                    <p>UX/UI</p>
                    <p>app</p>
                    <p>dev</p>
                </div>
            </div>
            <div className={s.preview}>
                <img src="./assets/images/iphone.png" alt="Project preview" />
                <div className={s.detailis}>
                    <a href='#'>more detailis</a>
                    <p>28 jan. 2023</p>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
    };

    return (
        <section className={` ${s.projects_section}`}>
            <h1>Projects</h1>
            {/* Карточки проектов */}
            <div >
                <Slider {...settings} >
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Slider>
            </div>

            {/* Скролл бар слайдера, длинной линией */}
            <div className={s.slider_block}>
                <a href="">all project</a>
                <div className={s.slider_scroll}></div>
            </div>

            <div className={s.zoom}>
                <div>
                    <img src="./assets/icons/people.png" alt="people" />
                    <p>Have a zoom meeting with an expert!</p>
                </div>
                <button>go zoom</button>
            </div>
        </section>
    );
};

export default Projects;