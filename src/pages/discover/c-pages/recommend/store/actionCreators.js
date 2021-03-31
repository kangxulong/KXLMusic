import * as actionTypes from './constants'

import {
  getBanner,
  getHotRecommends,
  getNewAlbums,
  getTopList
} from '@/network/recommend'

// dispatch(getTopBannersAction())
// dispatch的是actionCreators中的函数

const changeTopBanner = (res) => ({
  type:actionTypes.CHANGE_TOP_BANNER,
  topBanner:res.banners
})

const changeHotRecommends = res => ({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends:res.result
})

const changeNewAlbums = res => ({
  type:actionTypes.CHANGE_NEW_ALBUM,
  newAlbums:res.albums
})

const changeUpRanking = res => ({
  type:actionTypes.CHANGE_UP_RANKING,
  upRanking:res.playlist
})
const changeNewRanking = res => ({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRanking:res.playlist
})
const changeOriginRanking = res => ({
  type:actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking:res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    // 通过将res传入changeTopBanner函数来将topBanner保存到action中
    getBanner().then(res => {
      dispatch(changeTopBanner(res))
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommends(res))
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbums(res))
    })
  }
}

export const getTopListAction = id => {
  return dispatch => {
    getTopList(id).then(res => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRanking(res));
          break;
        case 3779629:
          dispatch(changeNewRanking(res));
          break;
        case 2884035:
          dispatch(changeOriginRanking(res));
          break;
        default:
          break;
      }
    })
  }
}