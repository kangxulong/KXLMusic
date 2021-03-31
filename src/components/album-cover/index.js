import React, { memo } from 'react'

import {getSizeImage} from '@/utils/format-utils'

import {AlbumCoverWrapper} from './style'

export default memo(function KXLAlbumCover(props) {
  const {info, width=118,size=100,bgp = -570 } = props;

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-img">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        <a href="/abc" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <p className="name">{info.name}</p>
        <p className="artist">{info.artist.name}</p>
      </div>
    </AlbumCoverWrapper>
  )
})
