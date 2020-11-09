import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="7" rx="2" ry="2" width="86" height="86" /> 
    <rect x="126" y="8" rx="2" ry="2" width="86" height="86" /> 
    <rect x="246" y="9" rx="2" ry="2" width="86" height="86" /> 
    <rect x="5" y="117" rx="2" ry="2" width="86" height="86" /> 
    <rect x="124" y="118" rx="2" ry="2" width="86" height="86" /> 
    <rect x="245" y="118" rx="2" ry="2" width="86" height="86" /> 
    <rect x="5" y="234" rx="2" ry="2" width="86" height="86" /> 
    <rect x="125" y="233" rx="2" ry="2" width="86" height="86" /> 
    <rect x="245" y="232" rx="2" ry="2" width="86" height="86" />
  </ContentLoader>
)

export default MyLoader

