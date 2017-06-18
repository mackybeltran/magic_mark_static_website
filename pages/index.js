import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Modal, Carousel, Button } from 'react-bootstrap'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
    this.handleFacebookLink = this.handleFacebookLink.bind(this);
    this.handleInstagramLink = this.handleInstagramLink.bind(this);
    this.handleTwitterLink = this.handleTwitterLink.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this)
    this.state = {
      videoDisplay: 'inline',
      siteDisplay: 'none',
      showModal: false,
      index: 0,
      direction: null
    }

  }

  handleChangeDisplay(event) {
    const changeDisplay = () => {
      this.setState({
        videoDisplay: 'none',
        siteDisplay: 'inline'
      })
    }
    setTimeout(changeDisplay, 5000)

  }

  componentDidMount(){
    this.handleChangeDisplay()
  }

  handleFacebookLink() {
    window.location.assign('https://www.facebook.com/MBeltranini/')
  }

  handleInstagramLink(){
    window.location.assign('https://www.instagram.com/magic_mark_show/')
  }

  handleTwitterLink(){
    window.location.assign('https://twitter.com/Beltranini')
  }

  handleSelect(selectedIndex, event) {
    console.log(event)
    console.log(selectedIndex)
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }



  render() {
    const divstyle = {
      display: this.state.videoDisplay,
    }
    const sitestyle = {
      display: this.state.siteDisplay,

    }
    return (
      <div>
        <video autoPlay="autoplay" muted className='intro' style={divstyle}>
          <source src="/public/videos/intro.mp4" type="video/mp4" />
          </video>

        <div style={sitestyle}>
          <div className='navbar'>
            <div className='icon-list'>
              <i className="fa fa-facebook-official fa-2x" aria-hidden="true" onClick={this.handleFacebookLink}></i>
              <i className="fa fa-instagram fa-2x" aria-hidden="true" onClick={this.handleInstagramLink}></i>
              <i className="fa fa-twitter fa-2x" aria-hidden="true" onClick={this.handleTwitterLink}></i>
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </div>
          </div>

          <div  className='image-wrapper'>
            <img src='/public/images/cover.jpg' className='cover'/>
            <div  className='logo-wrapper'>
              <img src='/public/images/logo.png' className='logo'/>
            </div>
            <div className='title'>
              <p className='title-text'>magic mark </p>
            </div>
          </div>

          <div className='footer'>
          <div className='about'> ABOUT
          </div>
          <div className='about-paragraph'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum ligula quis lectus tempus hendrerit. Aenean rutrum diam eu ligula pharetra, vitae ultrices lectus euismod. Vivamus ultricies interdum fermentum. Nullam quis orci efficitur urna mollis tincidunt id sit amet lacus. Mauris a enim tempus, imperdiet nunc ornare, pellentesque ex. In tempus viverra metus nec vehicula. Duis fermentum tellus nulla, id tristique felis ullamcorper eu. Maecenas a lectus scelerisque, mollis ipsum vitae, ultricies diam. Nulla egestas odio purus, in vestibulum ante laoreet vel. Aliquam vulputate risus dolor, nec laoreet tellus molestie eget.
            </p>
          </div>
          <div onClick={this.open} className='picture-button'>
          PICTURES
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Body>
            <h4>Pictures from my travels </h4>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/public/images/photos/lime2.jpg"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/public/images/photos/sexytrick.jpg"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/public/images/photos/Soju.jpg"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
          </div>
        </div>
      </div>
    )

  }
}


export default Index