import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
    this.handleFacebookLink = this.handleFacebookLink.bind(this);
    this.handleInstagramLink = this.handleInstagramLink.bind(this);
    this.handleTwitterLink = this.handleTwitterLink.bind(this);
    this.state = {
      videoDisplay: 'inline',
      siteDisplay: 'none'

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
          </div>
        </div>
      </div>
    )

  }
}


export default Index