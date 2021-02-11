import React from 'react';
import Link from 'next/link';
import { createMedia } from '@artsy/fresnel';
import Logo from '../assets/logo.jpg';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Input,
  Label
} from 'semantic-ui-react'

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
  mobileNavButton: { marginTop: 'auto', marginBottom: 'auto' },
  navMenu: (isHomePage) => ({
    margin: 'auto',
    color: isHomePage ? 'white' : '#333',
    fontWeight: 'bold'
  }),
  desktopNavMenu: (fixed, isHomePage) => ({
    backgroundColor: !fixed && 'none',
    borderBottom: isHomePage ? '3px solid white' : 'none'
  }),
}

const DesktopNav = ({menuItem, activeItem, isHomePage}) => {
  const [fixed, setFixed] = React.useState(undefined);

  return (
    <Media greaterThan='mobile'>
      {/*<Visibility once={false} onBottomPassed={()=>setFixed(true)} onBottomPassedReverse={()=>setFixed(false)}>*/}
        <Container>
          <Menu
            // fixed={fixed ? 'top' : null}
            pointing={!fixed}
            secondary
            widths={11}
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
        inverted
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
                  <div style={pageStyles.mobileNavName}>WOMEN IN DATA</div>
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
  const [activeItem, setActiveItem] = React.useState('home');
  const handleItemClick = (e, { name }) => setActiveItem(name)
  const {isHomePage} = props
  const style = pageStyles.navMenu(isHomePage);

  const menuItem = [
    <Menu.Item as='a' href="/home" key='Home' onClick={handleItemClick} style={style}>Home</Menu.Item>,
    <Menu.Item as='a' href="/about" key='About' onClick={handleItemClick} style={style}>About Us</Menu.Item>,
    <Menu.Item as='a' href="/projects" key='Projects' onClick={handleItemClick} style={style}>Projects</Menu.Item>,
    <Menu.Item as='a' href="/resources" key='Resources' onClick={handleItemClick} style={style}>Resources</Menu.Item>,
    <Menu.Item as='a' href="/event" key='Events' onClick={handleItemClick} style={style}>Events</Menu.Item>,
    <Menu.Item as='a' href="/blog" key='Blog' onClick={handleItemClick} style={style}>Blog</Menu.Item>,
    <Menu.Item as='a' href="/contact" key='Contact' onClick={handleItemClick} style={style}>Contact</Menu.Item>
  ]
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <MediaContextProvider>
        <DesktopNav menuItem={menuItem} activeItem={activeItem} isHomePage={isHomePage}/>
        <MobileNav menuItem={menuItem}/>
      </MediaContextProvider>
    </div>
  )
}

export default Nav;
