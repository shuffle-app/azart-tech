import s from '@/styles/Animation.module.css';

import Image from 'next/image';
import mainImg from '../../../public/assets/img/3dr.svg';
import img2 from '../../../public/assets/img/ш1.svg';
import img3 from '../../../public/assets/img/кк.svg';
import img4 from '../../../public/assets/img/ш2.svg';
import img5 from '../../../public/assets/img/ш3.svg';
import img6 from '../../../public/assets/img/ш4.svg';
import img7 from '../../../public/assets/img/ш5.svg';

const ImgAnimation = () => {
  return (
    <div className={s.img_container}>
      <Image className={s.main_img} src={mainImg} alt="" />
      <Image className={s.img2} src={img2} alt="" />
      <Image className={s.img3} src={img3} alt="" />
      <Image className={s.img4} src={img4} alt="" />
      <Image className={s.img5} src={img5} alt="" />
      <Image className={s.img6} src={img6} alt="" />
      <Image className={s.img7} src={img7} alt="" />

      <div className={s.glow} />
    </div>
  );
};

export default ImgAnimation;
