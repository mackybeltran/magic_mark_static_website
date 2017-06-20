import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Modal, Button } from 'react-bootstrap'
import Photolist from './public/components/Photolist.js'
import Videolist from './public/components/Videolist.js'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
    this.handleFacebookLink = this.handleFacebookLink.bind(this);
    this.handleInstagramLink = this.handleInstagramLink.bind(this);
    this.handleTwitterLink = this.handleTwitterLink.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.openPicture = this.openPicture.bind(this);
    this.closePicture = this.closePicture.bind(this);
    this.openService = this.openService.bind(this);
    this.closeService = this.closeService.bind(this)
    this.openVideo = this.openVideo.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
    this.state = {
      videoDisplay: 'inline',
      siteDisplay: 'none',
      showModalPicture: false,
      showModalVideo: false,
      showModalService: false,
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
    window.open('https://www.facebook.com/MBeltranini/')
  }

  handleInstagramLink(){
    window.open('https://www.instagram.com/magic_mark_show/')
  }

  handleTwitterLink(){
    window.open('https://twitter.com/Beltranini')
  }

  handleEmail(){
    window.location.assign('mailto:marklbeltran@gmail.com')
  }
  handleSelect(selectedIndex, event) {
    console.log(event)
    console.log(selectedIndex)
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
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
              <i className="fa fa-envelope fa-2x" aria-hidden="true" onClick={this.handleEmail}></i>
            </div>
          </div>

          <div  className='image-wrapper'>
            <img src='/public/images/cover.jpg' className='cover'/>
            <div  className='logo-wrapper'>
              <img src='/public/images/logo.png' className='logo'/>
            </div>
            <div className='title'>
              <p className='title-text'>MAGIC MARK </p>
            </div>
          </div>

          <div className='footer'>
            <div onClick={this.openPicture} className='picture-button'>
              PICTURES
            </div>
            <div onClick={this.openVideo} className='video-button'>
              VIDEOS
            </div>
            <div onClick={this.openService} className='service-button'>
              SERVICES
            </div>
            <div className='about'> ABOUT
            </div>
            <div className='about-paragraph'>
              <p>I am a magician and I have been performing professionally for 7 years. Originally from the Philippines,
              my show has been astounding many people across the globe. I have been on tour throughout Australia, Canada, Europe, The Philippines, South Korea, and the USA. <b/>
              People always ask me where I learned the magic I perform I have been very fortunate to be educated and trained with a Masters Class
              degree in magic at the Mcbride Mystery school in Las Vegas taught by the very best teachers in the industry. <b/>
            </p>
            </div>

              <Modal show={this.state.showModalPicture} onHide={this.closePicture} className='modal'>
                <Modal.Body>
                  <Photolist/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closePicture}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Modal show={this.state.showModalVideo} onHide={this.closeVideo}>
                <Modal.Body>
                  <h4>Videos</h4>
                    <Videolist/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeVideo}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Modal show={this.state.showModalService} onHide={this.closeService}>
                <Modal.Body>
                  <h4>Services</h4>

                  <h6>Parlour show </h6>
                  <p>I have a unique parlour type show (60-100 people)  that has been astounding thousands of people around the globe.
                    My parlour show is versatile and can be done anywhere, any time.
                  </p>
                  <b/>
                  <p>The entire act lasts about 45 minutes, and can be easily shortened or lengthened to meet any time requirements that you may have.
                  </p>
                  <b/>
                  <p>The show is suitable for any age group. The type of material in the parlour show often depends on the average age of the audience.
                    I can do a family show where the magic used utilizes very colorful and visual effects and I use props that children can relate to.
                    For adults, I show them impossible tricks that will be sure to blow and entertain their minds.
                  </p>
                  <b/>
                  <p>This show is a perfect addition to your birthday party, trade show, or corporate function.
                  </p>
                  <b/>
                  <h6>  Close-up Magic Show </h6>
                  <b/>
                  <p> Close up magic is a show done in close proximity of the guests.
                    My close-up show takes takes place in the spectator’s very own hands. I use the art called prestidigitation,
                    which is the highest and hardest form of magic and you can experience it first hand.
                  </p>
                  <b/>
                  <p>This show is perfect for events where you want the entertainment to blend in and allow your guests to do what they want.
                    I am able to perform this show for several hours, without repeating material. As I mingle amongst your guests, I will perform miracles for them in small groups.
                  </p>
                  <b/>
                  <p>This type of show is perfect for restaurants, lounge rooms, cruise ships, hospitality suites,
                    corporate and private events and weddings.
                  </p>
                  <b/>
                  <p>The material in this show has people laughing, screaming, cheering, and applauding.
                    Sometimes, the responses of these small groups can fill up the entire venue.
                  </p>
                  <b/>
                  <p>Magic in general is a great way to entertain guests, build interest and create foot traffic at any venue.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeService}>Close</Button>
                </Modal.Footer>
              </Modal>

          </div>
        </div>
      </div>
    )

  }
}


export default Index