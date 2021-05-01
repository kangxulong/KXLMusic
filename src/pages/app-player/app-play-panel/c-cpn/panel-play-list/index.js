import React, { memo, useRef } from 'react';

import {PlayListWrapper} from './style'

export default memo(function KXLPanelPlayList() {
  const playlist = useRef()

  console.log(playlist.current);

  return (
    <PlayListWrapper ref={playlist}>
        <ul>
          <li>我是li1</li>
          <li>我是li2</li>
          <li>我是li3</li>
          <li>我是li4</li>
          <li>我是li5</li>
          <li>我是li6</li>
          <li>我是li7</li>
          <li>我是li8</li>
          <li>我是li9</li>
          <li>我是li10</li>
          <li>我是li11</li>
          <li>我是li12</li>
          <li>我是li13</li>
          <li>我是li14</li>
          <li>我是li15</li>
          <li>我是li16</li>
          <li>我是li17</li>
          <li>我是li18</li>
          <li>我是li19</li>
          <li>我是li20</li>
        </ul>
    </PlayListWrapper>
  )
})
