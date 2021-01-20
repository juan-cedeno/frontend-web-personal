import React from "react"
import ContentLoader from "react-content-loader"

const SkeltetorTools = (props) => (
    <div className = 'skeletor'>

        <ContentLoader 
            speed={2}
            width={700}
            height={160}
            viewBox="0 0 700 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="-1" y="0" rx="0" ry="0" width="154" height="108" /> 
            <rect x="170" y="-3" rx="0" ry="0" width="154" height="108" /> 
            <rect x="343" y="-4" rx="0" ry="0" width="154" height="108" /> 
            <rect x="510" y="-4" rx="0" ry="0" width="154" height="108" />
        </ContentLoader>
      </div>
)

export default SkeltetorTools