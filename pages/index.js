import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Modal, Button } from 'react-bootstrap'

import Footer from './public/components/Footer.js'
import ReactDOM from 'react-dom'
import {Icon} from 'react-fa'



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
    this.handleFacebookLink = this.handleFacebookLink.bind(this);
    this.handleInstagramLink = this.handleInstagramLink.bind(this);
    this.handleTwitterLink = this.handleTwitterLink.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      videoDisplay: 'none',
      siteDisplay: 'none',

    }
  }



  handleChangeDisplay(event) {
    if (typeof window === 'undefined') {
      global.window = {}
    }

    const changeDisplay = () => {
      this.setState({
        videoDisplay: 'none',
        siteDisplay: 'inline'
      })
    }


    if (window.innerWidth >= 768) {
      this.setState({
        videoDisplay: 'inline',
        siteDisplay: 'none'
      })
    setTimeout(changeDisplay, 5300)
  } else {
    changeDisplay()
  }

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



  render() {

    if (typeof window === 'undefined') {
      global.window = {}
    }

    const introStyle = {
      display: this.state.videoDisplay,
    }
    const siteStyle = {
      display: this.state.siteDisplay,

    }


      if (window.innerWidth > window.innerHeight) {
        var coverStyle = {
        height: '75vh'
      }
      } else {
        var coverStyle = {
          height: '50vh'
        }
      }


    return (
      <div>
        <div style={introStyle}>
          <div className='navbar'>
          </div>
            <div className='aspect-ratio-intro'>
              <iframe src='https://www.youtube.com/embed/HbjPgfEBdCE?&showinfo=0&iv_load_policy=3&controls=0&autoplay=1' className='intro' frameBorder={0} alt='Magic Mark Intro'/>
            </div>
        </div>
        <div style={siteStyle}>
          <div className='navbar'>
            <div className='icon-list'>
              <Icon name="facebook-official"  size="2x" className="icon" onClick={this.handleFacebookLink}/>
              <Icon name="instagram" size="2x" className="icon" onClick={this.handleInstagramLink}/>
              <Icon name="twitter" size="2x" className="icon" onClick={this.handleTwitterLink}/>
              <Icon name="envelope" size="2x" className="icon" onClick={this.handleEmail}/>
            </div>
          </div>

          <div  className='image-wrapper' style={coverStyle}>
            <img src='/public/images/cover.jpg' className='cover' alt='Magic Mark cover photo' style={coverStyle}/>
            <div  className='logo-wrapper'>
                <img src='/public/images/logo.png' className='logo' alt='Magic Mark Logo'/>

            </div>

          </div>

          <div className='footer'>
            <Footer/>
          </div>
        </div>
      </div>
    )

  }
}


export default Index