import React from 'react'
import {Redirect} from "react-router-dom"

const KXLDiscover = React.lazy(() => import("@/pages/discover"))
const KXLRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"))
const KXLRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"))
const KXLSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"))
const KXLDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"))
const KXLArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"))
const KXLAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"))

const KXLFriend = React.lazy(() => import("@/pages/friend"))
const KXLMine = React.lazy(() => import("@/pages/mine"))

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