import s from '@/styles/cases/Slider.module.css'

const ImageSlider = () => {
  return (
    <>
      <div className={s.slider}>
          <img src="./assets/images/Welcome.png" alt="" />
          <img src="./assets/images/Welcome.png" alt="" />
          <img src="./assets/images/Welcome.png" alt="" />
          <img src="./assets/images/Welcome.png" alt="" />
          <img src="./assets/images/Welcome.png" alt="" />
          <img src="./assets/images/Welcome.png" alt="" />
      </div>
      <div className={s.glow}/>
    </>
  )
}

export default ImageSlider