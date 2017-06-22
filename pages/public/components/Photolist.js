import React from 'react'
import { Carousel } from 'react-bootstrap'

const photos = [{path: './public/images/photos/antwerpen14.jpg', caption: 'Antwerp 2014'},
                {path: './public/images/photos/bergenorway14.jpg', caption: 'Norway 2014'},
                {path: './public/images/photos/ed13b.jpg', caption: 'Prague 2013'},
                {path: './public/images/photos/ed13c.jpg', caption: 'Edinburgh 2013'},
                {path: './public/images/photos/edin13.jpg', caption: 'Edinburgh 2013'},
                {path: './public/images/photos/gram13.jpg', caption: 'Manila 2013'},
                {path: './public/images/photos/gramercy.jpg', caption: 'Manila 2013'},
                {path: './public/images/photos/halfcrowd.jpg', caption: 'Edinburgh 2013'},
                {path: './public/images/photos/jardin16.jpg', caption: 'Manila 2016'},
                {path: './public/images/photos/jardin16b.jpg', caption: 'Manila 2016'},
                {path: './public/images/photos/jardin16c.jpg', caption: 'Manila 2016'},
                {path: './public/images/photos/korea15.jpg', caption: 'South Korea 2015'}]

class Photolist extends React.Component {

  render() {
    return (
      <Carousel>
        {photos.map((photo, index) => {
          return (
            <Carousel.Item key={index}>
               <img src={photo.path} className='photo' alt='photo'/>
                <Carousel.Caption>
                  <p>{photo.caption}</p>
                </Carousel.Caption>
            </Carousel.Item>)
        })}
      </Carousel>
    )
  }
}

export default Photolist