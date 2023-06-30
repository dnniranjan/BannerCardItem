import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerCardItem
