import React from 'react'
import { Carousel } from 'react-bootstrap'

const videos = [{path: 'https://www.youtube.com/embed/2gOeuvX_JGY', caption: 'Demo Reel'},
                {path: 'https://www.youtube.com/embed/2cyt3ndRWgk', caption: 'Street Magic'},
                {path: 'https://www.youtube.com/embed/d1krzn_nH_c', caption: 'Old Demo Reel'}]

class Videolist extends React.Component {

  render() {
    return (
      <Carousel interval={false}>
        {videos.map((video, index) => {
          return (
            <Carousel.Item key={index}>
               <iframe width={1000} height={520} src={video.path} allowFullScreen  />
                <Carousel.Caption>
                  <p>{video.caption}</p>
                </Carousel.Caption>


            </Carousel.Item>)
        })}
      </Carousel>
    )
  }
}

export default Videolist