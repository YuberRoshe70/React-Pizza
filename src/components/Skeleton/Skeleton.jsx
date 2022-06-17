import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = () => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={250}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#F1F1F1"
    foregroundColor="#ffffff"
   
  >
     <circle cx="130" cy="125" r="125" /> 
    <rect x="1" y="257" rx="15" ry="15" width="280" height="46" /> 
    <rect x="1" y="316" rx="15" ry="15" width="280" height="83" /> 
   
    <rect x="1" y="415" rx="15" ry="15" width="91" height="38" /> 
    <rect x="140" y="410" rx="15" ry="15" width="140" height="45" />
   
  </ContentLoader>
)

export default Skeleton