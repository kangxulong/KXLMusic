import React, { memo} from 'react'


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

import KXLTopBanners from './c-cpns/top-banners'
import KXLHotRecommend from './c-cpns/hot-recommend'
import KXLNewAlbum from './c-cpns/new-album'
import KXLRCMRanking from './c-cpns/rcm-ranking'


function KXLRecommend(props) {
  return (
    <RecommendWrapper>
      <KXLTopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <KXLHotRecommend />
          <KXLNewAlbum />
          <KXLRCMRanking />
        </RecommendLeft>
        <RecommendRight />
      </Content>
    </RecommendWrapper>
  )
}

export default memo(KXLRecommend)

// function KXLRecommend(props) {

//   const {getBanner, topBanner} = props;

//   useEffect(() => {
//     getBanner()
//   }, [getBanner])

//   return (
//     <div>
//       <h2>KXLRecommend:{topBanner.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanner:state.recommend.topBanner
// })

// const mapDispatchToProps = dispatch => ({
//   getBanner:() => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(KXLRecommend))