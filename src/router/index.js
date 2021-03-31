import React from 'react'

import {Redirect} from "react-router-dom"

import KXLDiscover from "@/pages/discover";
import KXLRecommend from "@/pages/discover/c-pages/recommend"
import KXLRanking from "@/pages/discover/c-pages/ranking"
import KXLSongs from "@/pages/discover/c-pages/songs"
import KXLDjradio from "@/pages/discover/c-pages/djradio"
import KXLArtist from "@/pages/discover/c-pages/artist"
import KXLAlbum from "@/pages/discover/c-pages/album"

import KXLFriend from '@/pages/friend';
import KXLMine from '@/pages/mine';

const routes = [
  {
    path:"/",
    exact:true,
    render:() => {
      return (
        <Redirect to="/discover" />
      )
    }
  },
  {
    path:"/discover",
    component:KXLDiscover,
    routes:[
      {
        path:"/discover",
        exact:true,
        render:()=>{
          return(
            <Redirect to="/discover/recommend" />
          )
        }
      },
      {
        path:"/discover/recommend",
        component:KXLRecommend
      },
      {
        path:"/discover/ranking",
        component:KXLRanking
      },
      {
        path:"/discover/songs",
        component:KXLSongs
      },
      {
        path:"/discover/recommend",
        component:KXLRecommend
      },
      {
        path:"/discover/djradio",
        component:KXLDjradio
      },
      {
        path:"/discover/artist",
        component:KXLArtist
      },
      {
        path:"/discover/album",
        component:KXLAlbum
      },
    ]
  },
  {
    path:"/friend",
    component:KXLFriend
  },
  {
    path:"/mine",
    component:KXLMine
  }
]

export default routes