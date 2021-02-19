import React from 'react';
import Link from 'next/link';
import { createMedia } from '@artsy/fresnel';
import Logo from '../assets/logo.jpg';
import {SITE_NAME} from '../assets/siteDetails';

import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from 'semantic-ui-react'



const DesktopNav = ({menuItem, activeItem, isHomePage}) => {
  const [fixed, setFixed] = React.useState(undefined);

  return (
    <Media greaterThan='mobile'>
      {/*<Visibility once={false} onBottomPassed={()=>setFixed(true)} onBottomPassedReverse={()=>setFixed(false)}>*/}
      <div style={pageStyles.desktopNavWrapper(fixed, isHomePage)}>
        <Container>
          <Menu
            // fixed={fixed ? 'top' : null}
            pointing={!fixed}
            secondary
            widths={menuItem.length + 4}
            inverted={fixed}
            style={pageStyles.desktopNavMenu(fixed, isHomePage)}
            // color='violet'
          >
              {!fixed &&
                <Menu.Item basic="true" style={pageStyles.desktopNavMenuItem}>
                  <Image src={Logo} width="80px"/>
                </Menu.Item>
              }
              <Menu.Item/>
              <Menu.Item/>
              <Menu.Item/>
              {menuItem}
          </Menu>
        </Container>
      </div>
      {/*</Visibility>*/}
    </Media>
  )
}

const MobileNav = ({menuItem, activeItem}) => {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  return (
    <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar
        as={Menu}
        animation='overlay'
        // inverted
        style={pageStyles.sidebar}
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        {menuItem}
      </Sidebar>
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={() => {setSidebarOpened(true)}} style={pageStyles.mobileNavButton}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='left' basic="true">
                  <Image width="40px" src={Logo}/>
                  <div style={pageStyles.mobileNavName}>{SITE_NAME.toUpperCase()}</div>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

function Nav(props) {
  const [activeItem, setActiveItem] = React.useState(undefined);
  const handleItemClick = (e, { name }) => setActiveItem(name)
  const {isHomePage} = props
  const style = pageStyles.navMenu(isHomePage);

  const menuItem = [
    <Menu.Item as='a' href="/home" key='Home' onClick={handleItemClick} style={style}>Home</Menu.Item>,
    <Dropdown simple text='About Us' key='About' style={style}>
      <Dropdown.Menu>
        <Menu.Item as='a' href="/about/learn-about-us" onClick={handleItemClick} style={style}>Learn About Us</Menu.Item>
        <Menu.Item as='a' href="/about/committee-member" onClick={handleItemClick} style={style}>Committee Member</Menu.Item>
      </Dropdown.Menu>
    </Dropdown>,
    <Menu.Item as='a' href="/projects" key='Projects' onClick={handleItemClick} style={style}>Projects</Menu.Item>,
    <Menu.Item as='a' href="/resources" key='Resources' onClick={handleItemClick} style={style}>Resources</Menu.Item>,
    <Dropdown simple text='Events' key='Events' style={style}>
      <Dropdown.Menu>
        <Menu.Item as='a' href="/event/upcoming-events" onClick={handleItemClick} style={style}>Upcoming Events</Menu.Item>
        <Menu.Item as='a' href="/event/woman-in-data-conference" onClick={handleItemClick} style={style}>Women in Data Conference</Menu.Item>
      </Dropdown.Menu>
    </Dropdown>,
    <Menu.Item as='a' href="/blog" key='Blog' onClick={handleItemClick} style={style}>Blog</Menu.Item>,
    <Menu.Item as='a' href="/contact" key='Contact' onClick={handleItemClick} style={style}>Contact</Menu.Item>
  ]
  return (
    <div style={pageStyles.nav}>
      <MediaContextProvider>
        <DesktopNav menuItem={menuItem} activeItem={activeItem} isHomePage={isHomePage}/>
        <MobileNav menuItem={menuItem}/>
      </MediaContextProvider>
    </div>
  )
}

export default Nav;

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const pageStyles = {
  desktopNavMenuItem: {
    justifyContent: 'left'
  },
  mobileNavName: {
    margin:'auto',
    marginLeft: 18,
    fontSize: 20,
  },
  nav: { position: 'relative', zIndex: 5 },
  mobileNavButton: { marginTop: 'auto', marginBottom: 'auto' },
  navMenu: (isHomePage) => ({
    margin: 'auto',
    color: isHomePage ? 'white' : '#333',
    fontWeight: 'bold'
  }),
  desktopNavWrapper: (fixed, isHomePage) => ({
    backgroundColor: (!fixed && !isHomePage && 'white'),
  }),
  desktopNavMenu: (fixed, isHomePage) => ({
    backgroundColor: (!fixed && 'none'),
    borderBottom: isHomePage ? '3px solid white' : 'none'
  }),
  sidebar: { backgroundColor: '#229EFD' }
}
