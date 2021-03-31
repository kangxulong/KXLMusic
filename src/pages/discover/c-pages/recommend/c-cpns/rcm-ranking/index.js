import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {getTopListAction} from '../../store/actionCreators'

import {RcmRankingWrapper} from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import KXLTopRanking from "@/components/top-ranking"


export default memo(function KXLRCMRanking() {

  // redux-hook
  const {upRanking,newRanking,originRanking} = useSelector(state => ({
    upRanking:state.getIn(["recommend","upRanking"]),
    newRanking:state.getIn(["recommend","newRanking"]),
    originRanking:state.getIn(["recommend","originRanking"])
  }))
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  },[dispatch])

  return (
    <RcmRankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className="top-list">
        <KXLTopRanking info={upRanking} />
        <KXLTopRanking info ={newRanking} />
        <KXLTopRanking info={originRanking} />
      </div>
    </RcmRankingWrapper>
  )
})
