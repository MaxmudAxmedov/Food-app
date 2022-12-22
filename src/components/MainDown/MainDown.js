import "./maindown.css"

export const MainDown = ({img,title,text,count,bgColor,btnText}) => {
  return (
    <li className="main__item">
     <div className="costum">
      {img}
      <strong className="costum__title">
       {title}
      </strong>
      </div> 
      <div className="main__menu">
        <p className="mainmenu__text">
         {text}
        </p>
      </div>
      <span className="main__count">{count}</span>
      <button style={bgColor} className="main__btn">{btnText}</button>
    </li>
  )
}
