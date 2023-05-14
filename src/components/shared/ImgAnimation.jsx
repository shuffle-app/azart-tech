import s from '@/styles/Animation.module.css'

const ImgAnimation = () => {
    return (

        <div className={s.img_container}>
            <img className={s.main_img} src="./assets/img/3dr.svg" alt="" />
            <img className={s.img2} src="./assets/img/ш1.svg" alt="" />
            <img className={s.img3} src="./assets/img/кк.svg" alt="" />
            <img className={s.img4} src="./assets/img/ш2.svg" alt="" />
            <img className={s.img5} src="./assets/img/ш3.svg" alt="" />
            <img className={s.img6} src="./assets/img/ш4.svg" alt="" />
            <img className={s.img7} src="./assets/img/ш5.svg" alt="" />
            <div className={s.glow}/>
        </div>
    )
}

export default ImgAnimation