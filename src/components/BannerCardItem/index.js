// Write your code here.

import './index.css'

const BannerProfile = props => {
  const {bannerDetails} = props
  const {className, headerText, description, id} = bannerDetails

  return (
    <li className={`banner-card-container ${className}`}>
      <div className="banner-details-container">
        <h1 className="banner-heading">{headerText}</h1>
        <p className="banner-paragraph">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerProfile
