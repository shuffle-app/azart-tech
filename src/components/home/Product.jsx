import s from '@/styles/main/Product.module.css'

const Product = () => {
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
              cardTitle: "business analysis",
              cardDesc:
                "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
            },
            {
              cardTitle: "business analysis",
              cardDesc:
                "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
            },
            {
              cardTitle: "business analysis",
              cardDesc:
                "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
            }
          ]
        },
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
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              },
              {
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              },
              {
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              }
            ]
          },
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
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              },
              {
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              },
              {
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              }
            ]
          },
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
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              },
              {
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              },
              {
                cardTitle: "business analysis",
                cardDesc:
                  "business process specialists in our team are able to spot-scan the product concept already at the start and assemble a working business model in it that will achieve the necessary KPIs"
              }
            ]
          },
      ];
    return (
        <section className={`container ${s.product_section}`}>
            <h1>Product</h1>
            <img className={s.img1} src="./assets/images/ш2.png" alt="" />
            <img className={s.img2} src="./assets/images/ш5.png" alt="" />
            <div className={s.products_block}>
                {productsData.map((product) => (
                    <div className={s.product}>
                        <div className={s.glow}/>
                        <div className={s.product_header}>
                            <h2>{product.title}</h2>
                            <p>{product.desc}</p>
                        </div>
                        <div className={s.product_cards}>
                            {product.cards.map((card) => (
                                <div className={s.card}>
                                    <h2>{card.cardTitle}</h2>
                                    <p>{card.cardDesc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className={s.azart}>
                    <p>azart technologies</p>
                </div>
            </div>


        </section>
    )
}

export default Product