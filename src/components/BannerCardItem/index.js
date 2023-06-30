import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <div>
          <button className="buttom">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
