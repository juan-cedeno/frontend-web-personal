import React from 'react'
import ContentLoader from 'react-content-loader'
import '../css/skeletor.css'

const SkeletonProyect = props => (
  <div className = 'skeletor'>

      <ContentLoader
        width={800}
        height={575}
        viewBox="0 0 800 575"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        >
        <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
        <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
        <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
        <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
        <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
        <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
        <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
        <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />

      </ContentLoader>

    </div>
)

export default SkeletonProyect