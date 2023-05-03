import s from '@/styles/main/Product.module.css'
import { useState } from 'react';

const Product = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(-1);

  const onClickCard = (index) => {
    if (activeProductIndex === index) {
      setActiveProductIndex(-1);
    } else {
      setActiveProductIndex(index);
    }
  };

    const productsData = [
        {
          title: "analitics",
          desc: "Powerful analytical systems",
          cards: [
            {
              cardTitle: "business analysis",
              cardDesc:
                "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
            },
            {
              cardTitle: "customer development",
              cardDesc:
                "we do not work by portraits, but we know by sight, starting interaction with potential consumers of the product even before its launch, through field marketing research"
            },
            {
              cardTitle: "analytics + monitoring systems",
              cardDesc:"We use advanced system monitoring systems so that your product does not get stuck at the development stages, but enters the market on time, without hints of bugs and failures."
            },
            {
              cardTitle: "bigdata + machine learning",
              cardDesc:"provided with a stack of technologies with which it does not matter to us whether the future volume of data is calculated in hundreds or thousands - everything will work like a Swiss watch - to release not just a digital product, but a progressive development that will take into account both trends and uniqueness in the market, with artificial intelligence embedded - we know how to do it"
            },
          ]
        },

        {
            title: "app and web",
            desc: "Ideal approaches to minimal models developing",
            cards: [
              {
                cardTitle: "test driven development",
                cardDesc:"we specially assembled a team of developers capable of correctly writing code using the TDD - premature testing methodology (out of 112 applicants, only 7 were capable) in order to avoid code failures after the product launch and in the process"
              },
              {
                cardTitle: "ux ui mvp",
                cardDesc:"creating a product, before its launch, the MPV version became an integral part. at the same time, everyone focuses on usability, we will take this into account, but first of all we will not forget about conversion triggers"
              },
              {
                cardTitle: "minimum loveable product",
                cardDesc:"MVP is not always enough, depending on the product, then MLP is required, which will be based on user experience, because MLP is the best way to interact with end consumers and evoke emotions in them"
              },
              {
                cardTitle: "code mvp",
                cardDesc:""
              },
            ]
        },

        {
          title: "digital",
          desc: "Maximum expertise in the digital environment",
          cards: [
            {
              cardTitle: "digital instruments",
              cardDesc:"- together with you, we are creating a product, and who but we, as part of our marketers, clearly know which digital marketing tools to use and how to achieve target KPIs"
            },
            {
              cardTitle: "digital forecast modeling",
              cardDesc:"making an economic/conversion forecast product concept on three levels: optimistic, optimal, pessimistic. Based on the potential of digital tools."
            },
            {
              cardTitle: "3 months guarantee",
              cardDesc:"Providing statistic analysis and digital support after product launch. We provide development advising, regardless of the final goals"
            },
          ]
        },

        {
          title: "product packaging",
          desc: "",
          cards: [
            {
              cardTitle: "pitch creating",
              cardDesc:"in the pursuit of making an MVP faster, many ignore the importance of the pitch deck, making it for the sake of a “tick”, but we invest the lion's share of efforts in it, because numbers and risk guarantees are more important to the investor/ partner"
            },
            {
              cardTitle: "production",
              cardDesc:"Creating of professional promo-video"
            },
            {
              cardTitle: "ideas expert audit",
              cardDesc:"alas, we cannot silently accept your idea and put it into operation until we examine the target market, taking apart its strengths and weaknesses into grains in order to improve your concept to a unique level"
            },
            {
              cardTitle: "unique ui items",
              cardDesc:"Parts of an interface – part of branding system"
            },
          ]
        },
      ];
    return (
        <section className={` ${s.product_section}`}>
            <h1>Product</h1>
            <img className={s.img1} src="./assets/images/ш2.png" alt="" />
            <img className={s.img2} src="./assets/images/ш5.png" alt="" />
            <div className={s.products_block}>
            {productsData.map((product, index) => (
              <div key={index} className={s.product}>
                <div className={s.glow} />
                <div className={s.product_header}>
                  <div className={s.title}>
                    <h2>{product.title}</h2>
                    <p>{product.desc}</p>
                  </div>
                  <button onClick={() => onClickCard(index)} className={s.list_btn}>
                    {activeProductIndex === index ? (
                      <img className={s.btn} src="./assets/icons/arr-minus.svg" alt="btn" width="30" height="30" />
                    ) : (
                      <img className={s.btn} src="./assets/icons/arr-plus.svg" alt="btn" width="30" height="30" />
                    )}
                  </button>
                </div>
                <div className={s.product_cards}>
                  {product.cards.map((card, cardIndex) => (
                    <div key={cardIndex} className={activeProductIndex === index ? s.active_card : s.card}>
                      <h2 className={s.card_h2}>{card.cardTitle}</h2>
                      <p className={s.card_p}>{card.cardDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

              
              <div className={s.azart}>
                  <p>azart technologies</p>
                <div className={s.glow5}/>
              </div>
            </div>


        </section>
    )
}

export default Product