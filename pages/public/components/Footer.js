import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Photolist from './Photolist.js'
import Videolist from './Videolist.js'
import Services from './Services.js'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.openAbout = this.openAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
    this.openPicture = this.openPicture.bind(this);
    this.closePicture = this.closePicture.bind(this);
    this.openService = this.openService.bind(this);
    this.closeService = this.closeService.bind(this)
    this.openVideo = this.openVideo.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
    this.state= {
      showModalAbout: false,
      showModalPicture: false,
      showModalVideo: false,
      showModalService: false,
      index: 0,
      direction: null
    }
  }

  closeAbout() {
    this.setState({ showModalAbout: false });
  }

  openAbout() {
    this.setState({ showModalAbout: true });
  }

  closePicture() {
    this.setState({ showModalPicture: false });
  }

  openPicture() {
    this.setState({ showModalPicture: true });
  }

  closeVideo() {
    this.setState({ showModalVideo: false });
  }

  openVideo() {
    this.setState({ showModalVideo: true });
  }

  closeService() {
    this.setState({ showModalService: false })
  }

  openService() {
    this.setState({ showModalService: true })
  }

  render() {

    if (typeof window === 'undefined') {
      global.window = {}
    }
    if (window.innerWidth > 768) {
    return (
      <div>
      <div className='about'> ABOUT
            </div>
            <div className='about-paragraph'>
              <p>I am a magician and I have been performing professionally for 7 years. Originally from the Philippines,
              my show has been astounding many people across the globe. I have been on tour throughout Australia, Canada, Europe, The Philippines, South Korea, and the USA. <b/>
              People always ask me where I learned the magic I perform I have been very fortunate to be educated and trained with a Masters Class
              degree in magic at the Mcbride Mystery school in Las Vegas taught by the very best teachers in the industry. <b/>
            </p>
            </div>
            <div onClick={this.openPicture} className='picture-button'>
              PICTURES
            </div>
            <div onClick={this.openVideo} className='video-button'>
              VIDEOS
            </div>
            <div onClick={this.openService} className='service-button'>
              SERVICES
            </div>
            <Modal show={this.state.showModalPicture} onHide={this.closePicture} className='modal'>
                <Modal.Body>
                  <Photolist/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closePicture}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Modal show={this.state.showModalVideo} onHide={this.closeVideo} dialogClassName="video-modal"
              >
                <Modal.Body>
                    <Videolist/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeVideo}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Modal show={this.state.showModalService} onHide={this.closeService}>
                <Services/>
                <Modal.Footer>
                  <Button onClick={this.closeService}>Close</Button>
                </Modal.Footer>
              </Modal>
          </div>
        )
  } else {
    return (
      <div>
        <div onClick={this.openAbout} className='about-button-mobile'>
          ABOUT
        </div>
        <div onClick={this.openPicture} className='picture-button-mobile'>
          PICTURES
        </div>
        <div onClick={this.openVideo} className='video-button-mobile'>
          VIDEOS
        </div>
        <div onClick={this.openService} className='service-button-mobile'>
          SERVICES
        </div>
        <Modal show={this.state.showModalPicture} onHide={this.closePicture} className='modal'>
          <Modal.Body>
            <Photolist/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closePicture}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModalVideo} onHide={this.closeVideo} dialogClassName="video-modal">
          <Modal.Body>
            <Videolist/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeVideo}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModalService} onHide={this.closeService}>
          <Services/>
          <Modal.Footer>
            <Button onClick={this.closeService}>Close</Button>
          </Modal.Footer>
        </Modal>

         <Modal show={this.state.showModalAbout} onHide={this.closeAbout} className='modal'>
          <Modal.Body>
            <div className='about-paragraph-mobile'>
              <p>I am a magician and I have been performing professionally for 7 years. Originally from the Philippines,
              my show has been astounding many people across the globe. I have been on tour throughout Australia, Canada, Europe, The Philippines, South Korea, and the USA. <b/>
              People always ask me where I learned the magic I perform I have been very fortunate to be educated and trained with a Masters Class
              degree in magic at the Mcbride Mystery school in Las Vegas taught by the very best teachers in the industry. <b/>
            </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeAbout}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}
  }
}



export default Footer