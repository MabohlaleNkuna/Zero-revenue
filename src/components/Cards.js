import { IoMdArrowForward } from "react-icons/io";

function Cards({ cardsData }) {
  return (
    <div className="plans">
      {cardsData.map((plan, i) => (
        <div key={i} className={`Plan ${plan.color}`}>
          <div className="category">{plan.category}</div>
          <div className="heading">{plan.heading}</div>
          <div className="info">{plan.info}</div>
          <div className="line"></div>
          <div className="year">{plan.year}</div>
          <div className="percent">
            <div>{plan.percent}</div>
            <div className="arrow">
              <IoMdArrowForward style={{ fontSize: "1.6rem" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
