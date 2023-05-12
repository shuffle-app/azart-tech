import s from '@/styles/cases/Stack.module.css'
import ImageSlider from './ImageSlider'
import Slider3D from './ImageSlider'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AdaptiveSlider from '../home/AdaptiveSlider';


const Stack = () => {

  return (
    <section className={`container main_container`}>
      <div className={s.stack_header}>
        <h2>Technology stack</h2>
        <div className={s.slider_header}>
          <h3>What we have done</h3>
          <div className={s.slider_btn}>
            <span>Mobile</span>
            <div className={s.slider_button}>
              <div/>
            </div>
            <p>Desktop</p>
          </div>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.stacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>UX/UI</p>
        </div>

        <div>
          <ImageSlider/>
        </div>

      </div>
    </section>
  )
}

export default Stack