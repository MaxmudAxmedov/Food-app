
import "./minicard.css"

export const MiniCard = ({bgColor,count,text,point,img,top}) => {
  return (
    <div className="mincard">
      <div className="card__top">
        {img}
        <span style={bgColor} className="counter">
        {point}
        </span>
        {top}
      </div>
      <div className="card__main">
        <strong className="card__tilte">
        {count}
        </strong>
      </div>
      <p className="card__text">{
      text}</p>
    </div>
  )
}
