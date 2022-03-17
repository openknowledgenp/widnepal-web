import React from 'react';
import Link from 'next/link';
import { createMedia } from '@artsy/fresnel';
import Logo from '../assets/logo.jpg';
import { NAV_BAR_OPTIONS } from '../graphql/common.queries.js';
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
import { useQuery } from '@apollo/react-hooks';

const DesktopNav = ({menuItem, activeItem, isHomePage, resultObject, errorReport}) => {
  const [fixed, setFixed] = React.useState(undefined);
  const site_logo = {data: resultObject['siteLogo'], errStatus: errorReport['siteLogoHasError']}
  const renderHTML = (data) => <div style={pageStyles.noLogoMsg} dangerouslySetInnerHTML={{ __html: data }}/>

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
                  {site_logo.errStatus ?
                    renderHTML(site_logo.data)
                    :
                    <div style={pageStyles.desktopLogoContainer}>
                      <Image as="a" href="/home" src={site_logo.data.mediaItemUrl} style={pageStyles.desktopLogo}/>
                    </div>
                  }
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

const MobileNav = ({menuItem, activeItem, resultObject, errorReport}) => {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  const site_logo = {data: resultObject['siteLogo'], errStatus: errorReport['siteLogoHasError']}
  const renderHTML = (data) => <div style={pageStyles.noLogoMsg} dangerouslySetInnerHTML={{ __html: data }}/>
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
                  {site_logo.errStatus ?
                    renderHTML(site_logo.data)
                    :
                    <Image src={site_logo.data.mediaItemUrl} style={pageStyles.mobileLogo}/>
                  }
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

function Nav({isHomePage, resultObject, errorReport}) {
  const [activeItem, setActiveItem] = React.useState(undefined);
  const handleItemClick = (e, { name }) => setActiveItem(name)
  const style = pageStyles.navMenu(isHomePage);

  const [
      { loading: navBarLoading, data: navBarData, error: navBarError },
  ] = [ useQuery(NAV_BAR_OPTIONS) ];

  let otherAboutUsOptions = []
  let otherEventsOptions = []
  let tempAboutSpace = []
  let tempEventsSpace = []
  try {
    otherAboutUsOptions = navBarData.abouts.edges.filter(x=>x.node.about_us_page.page === "Other")
    otherEventsOptions = navBarData.events.edges.filter(x=>x.node.eventDetails.page === "Other")
    tempAboutSpace = []
    tempEventsSpace = []
    otherAboutUsOptions = otherAboutUsOptions.map((x, i) => {
      if (tempAboutSpace.indexOf(x.node.about_us_page.pageTitle) === -1) {
        tempAboutSpace.push(x.node.about_us_page.pageTitle)
        return x
      }
    });
    otherEventsOptions = otherEventsOptions.map((x, i) => {
      if (tempEventsSpace.indexOf(x.node.eventDetails.pageTitle) === -1) {
        tempEventsSpace.push(x.node.eventDetails.pageTitle)
        return x
      }
    });
    otherAboutUsOptions = otherAboutUsOptions.filter(x=>x)
    otherEventsOptions = otherEventsOptions.filter(x=>x)


  } catch (e) {
  }

  const menuItem = [
    <Menu.Item as='a' href="/home" key='Home' onClick={handleItemClick} style={style}>Home</Menu.Item>,
    <Dropdown simple text='About Us' key='About' style={style}>
      <Dropdown.Menu>
        <Menu.Item as='a' href="/about/learn-about-us" onClick={handleItemClick} style={style}>Learn About Us</Menu.Item>
        <Menu.Item as='a' href="/about/committee-member" onClick={handleItemClick} style={style}>Committee Member</Menu.Item>
        <Menu.Item as='a' href="/about/thematic-areas" onClick={handleItemClick} style={style}>Thematic Areas</Menu.Item>
        {otherAboutUsOptions.length > 0 && otherAboutUsOptions.map(x=><Menu.Item as='a' key={x.node.about_us_page.pageTitle} href={`/about/other?page=${x.node.about_us_page.pageTitle}`} onClick={handleItemClick} style={style}>{x.node.about_us_page.pageTitle}</Menu.Item>)}
      </Dropdown.Menu>
    </Dropdown>,
    <Menu.Item as='a' href="/projects" key='Projects' onClick={handleItemClick} style={style}>Projects</Menu.Item>,
    <Menu.Item as='a' href="/resources" key='Resources' onClick={handleItemClick} style={style}>Resources</Menu.Item>,
    <Menu.Item as='a' href="/blog" key='Blog' onClick={handleItemClick} style={style}>Blog</Menu.Item>,
    <Dropdown simple text='Events' key='Events' style={style}>
      <Dropdown.Menu>
        <Menu.Item as='a' href="/event/upcoming-events" onClick={handleItemClick} style={style}>Upcoming Events</Menu.Item>
        <Menu.Item as='a' href="/event/women-in-data-conference-2022" onClick={handleItemClick} style={style}>Women in Data Conference 2022</Menu.Item>
        <Menu.Item as='a' href="/event/women-in-data-conference" onClick={handleItemClick} style={style}>Women in Data Conference 2021</Menu.Item>
        {otherEventsOptions.length > 0 && otherEventsOptions.map(x=><Menu.Item as='a' key={x.node.eventDetails.pageTitle} href={`/event/other?page=${x.node.eventDetails.pageTitle}`} onClick={handleItemClick} style={style}>{x.node.eventDetails.pageTitle}</Menu.Item>)}
      </Dropdown.Menu>
    </Dropdown>,
    <Menu.Item as='a' href="/contact" key='Contact' onClick={handleItemClick} style={style}>Contact</Menu.Item>
  ]
  return (
    <div style={pageStyles.nav}>
      <MediaContextProvider>
        <DesktopNav {...{menuItem, activeItem, isHomePage, resultObject, errorReport}} />
        <MobileNav {...{menuItem, resultObject, errorReport}} />
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
  desktopLogoContainer: {
    height: 80,
    width: '100%',
  },
  desktopLogo: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: 'auto'
  },
  mobileLogo: {
    maxHeight: 40,
    maxWidth: 40
  },
  noLogoMsg: {
    padding: 20
  },
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
    fontWeight: '400',
    fontSize: '16px'
  }),
  desktopNavWrapper: (fixed, isHomePage) => ({
    backgroundColor: (!fixed && !isHomePage && 'white'),
  }),
  desktopNavMenu: (fixed, isHomePage) => ({
    backgroundColor: (!fixed && 'none'),
    borderBottom: isHomePage ? '1px solid white' : 'none'
  }),
  sidebar: { backgroundColor: '#229EFD' }
}
