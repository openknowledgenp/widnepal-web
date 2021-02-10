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

const DesktopNav = ({menuItem, activeItem}) => {
  const [fixed, setFixed] = React.useState(undefined);

  return (
    <Media greaterThan='mobile'>
      <Visibility once={false} onBottomPassed={()=>setFixed(true)} onBottomPassedReverse={()=>setFixed(false)}>
        <Container>
          <Menu
            // fixed={fixed ? 'top' : null}
            pointing={!fixed}
            secondary
            widths={10}
            inverted={fixed}
            style={{ backgroundColor: !fixed && 'white', borderBottom: '1px solid cyan' }}
            // color='violet'
          >
              {!fixed &&
                <Menu.Item basic="true" style={{justifyContent: 'left'}}>
                  <Image src={Logo} width="80px"/>
                </Menu.Item>
              }
              <Menu.Item/>
              <Menu.Item/>
              {menuItem}
          </Menu>
        </Container>
      </Visibility>
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
                <Menu.Item onClick={() => {setSidebarOpened(true)}}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='left' basic="true">
                  <Image src="https://react.semantic-ui.com/logo.png" width="70px"/>
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
  const menuItem = [
    <Menu.Item as='a' href="/home" key='Home' onClick={handleItemClick} style={{ margin: 'auto' }}>Home</Menu.Item>,
    <Menu.Item as='a' href="/about" key='About' onClick={handleItemClick} style={{ margin: 'auto' }}>About Us</Menu.Item>,
    <Menu.Item as='a' href="/projects" key='Projects' onClick={handleItemClick} style={{ margin: 'auto' }}>Projects</Menu.Item>,
    <Menu.Item as='a' href="/resources" key='Resources' onClick={handleItemClick} style={{ margin: 'auto' }}>Resources</Menu.Item>,
    <Menu.Item as='a' href="/event" key='Events' onClick={handleItemClick} style={{ margin: 'auto' }}>Events</Menu.Item>,
    <Menu.Item as='a' href="/blog" key='Blog' onClick={handleItemClick} style={{ margin: 'auto' }}>Blog</Menu.Item>,
    <Menu.Item as='a' href="/contact" key='Contact' onClick={handleItemClick} style={{ margin: 'auto' }}>Contact</Menu.Item>
  ]
  return (
    <MediaContextProvider>
      <DesktopNav menuItem={menuItem} activeItem={activeItem}/>
      <MobileNav menuItem={menuItem}/>
    </MediaContextProvider>
  )
}

export default Nav;
