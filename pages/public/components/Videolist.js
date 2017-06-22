import React from 'react'
import { Carousel } from 'react-bootstrap'

const videos = [{path: 'https://www.youtube.com/embed/2gOeuvX_JGY?controls=1', caption: 'Demo Reel'},
                {path: 'https://www.youtube.com/embed/2cyt3ndRWgk?controls=1', caption: 'Street Magic'},
                {path: 'https://www.youtube.com/embed/d1krzn_nH_c?controls=1', caption: 'Old Demo Reel'}]

class Videolist extends React.Component {

  render() {
    return (
      <Carousel interval={false} indicators={false} >
        {videos.map((video, index) => {
          return (
            <Carousel.Item key={index}>
               <iframe width={1000} height={520} src={video.path} allowFullScreen className='videolist-video'/>



            </Carousel.Item>)
        })}
      </Carousel>
    )
  }
}

export default Videolist