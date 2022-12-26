import "./maintop.css"

export const MainTop = () => {
  return (
    <div className="main__top">
      <div className="main__high">
        <h4 className="main__title">
        Order Report
        </h4>
        <button className="main__btn">
        Filter Order
        </button>
      </div>
      <div className="main__down">
        <ul className="down__list">
          <li className="down__item">Customer</li>
          <li className="down__item">Menu</li>
          <li className="down__item">Total Payment</li>
          <li className="down__item">Status</li>
        </ul>
      </div>
    </div>
  )
}
