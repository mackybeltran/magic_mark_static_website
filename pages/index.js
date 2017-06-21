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
      videoDisplay: 'inline',
      siteDisplay: 'none',

    }
  }



  handleChangeDisplay(event) {
    const changeDisplay = () => {
      this.setState({
        videoDisplay: 'none',
        siteDisplay: 'inline'
      })
    }
    setTimeout(changeDisplay, 4500)

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
    const divstyle = {
      display: this.state.videoDisplay,
    }
    const sitestyle = {
      display: this.state.siteDisplay,

    }
    return (
      <div>
        <div style={divstyle}>
          <div className='navbar'>
          </div>
          <div className='intro-wrapper'>
            <img src='/public/images/intro.gif' className='intro' />
          </div>
          </div>
        <div style={sitestyle}>
          <div className='navbar'>
            <div className='icon-list'>
              <Icon name="facebook-official"  size="2x" className="icon" onClick={this.handleFacebookLink}/>
              <Icon name="instagram" size="2x" className="icon" onClick={this.handleInstagramLink}/>
              <Icon name="twitter" size="2x" className="icon" onClick={this.handleTwitterLink}/>
              <Icon name="envelope" size="2x" className="icon" onClick={this.handleEmail}/>
            </div>
          </div>

          <div  className='image-wrapper'>
            <img src='/public/images/cover.jpg' className='cover'/>
            <div  className='logo-wrapper'>
                <img src='/public/images/logo.png' className='logo'/>

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