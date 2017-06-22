import React from 'react'
import { Carousel } from 'react-bootstrap'

const videos = [{path: 'https://www.youtube.com/embed/2gOeuvX_JGY?controls=1&showinfo=0', caption: 'Demo Reel'},
                {path: 'https://www.youtube.com/embed/2cyt3ndRWgk?controls=1&showinfo=0', caption: 'Street Magic'},
                {path: 'https://www.youtube.com/embed/d1krzn_nH_c?controls=1&showinfo=0', caption: 'Old Demo Reel'}]

class Videolist extends React.Component {

  render() {
    return (
      <Carousel interval={false} indicators={false} >
        {videos.map((video, index) => {
          return (
            <Carousel.Item key={index}>
              <div className='aspect-ratio'>
               <iframe width={1000} height={520} src={video.path} allowFullScreen className='videolist-video' alt='Magic Marks demo reels' width={300}  frameborder={0}/>
              </div>



            </Carousel.Item>)
        })}
      </Carousel>
    )
  }
}

export default Videolist