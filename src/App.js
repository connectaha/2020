import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import { Image, NavLink, Button, Provider as ThemeProvider } from 'rebass'
import Icon from 'react-simple-icons'
import Routes from 'react-static-routes'
import theme from './theme'
import logo from './connectahaLogo.svg'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #0d1d42;
    color: white;
  }
`
const AppStyles = styled.div`
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width:1200px;
  margin: 0 auto;

  img {
    max-width: 100%;
  }
`

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  border-bottom: 1px solid #174899;

  > img {
    margin: 0;
    min-width: none;
    width: auto;
    cursor: pointer;
  }
`

const AppFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: auto;
  border-top: 1px solid #174899;
`


const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppStyles>
        <AppHeader px={2}>
          <Image py={5} my={5} mx={[1, 2, 3, 4]} src={logo} onClick={() => { window.location = '/' }} alt="Connectaha Logo" width={[2, 1, 0.5]} />
          <Navigation>
            {/* <NavLink fontFamily="Barlow-Regular" fontSize={[2, 3]} p={4} to="/sessions" is={Link}>Sessions</NavLink>
            <NavLink fontFamily="Barlow-Regular" fontSize={[2, 3]}p={4} to="/schedule" is={Link}>Schedule</NavLink>
            <NavLink fontFamily="Barlow-Regular" fontSize={[2, 3]} p={4} to="/speakers" is={Link}>Speakers</NavLink>
            <NavLink fontFamily="Barlow-Regular" fontSize={[2, 3]} p={4} to="/sponsors" is={Link}>Sponsors</NavLink>
            <NavLink fontFamily="Barlow-Regular" fontSize={[2, 3]} py={4} to="https://www.eventbrite.com/e/connectaha-technology-conference-tickets-71091044227?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing" is={Link}>
              <Button fontFamily="Barlow-Regular" fontSize={[1, 2]} bg="action" color="white" border="none">Buy Tickets</Button>
            </NavLink> */}
          </Navigation>
        </AppHeader>
        <div>
          <Routes />
        </div>
        <AppFooter>
          <div>
            <p>Copyright 2018-2020 © Connectaha, LLC. All rights reserved.</p>
          </div>
          <div>
            <NavLink to="https://twitter.com/connectaha" is={Link}>
              <Icon ml={4}name="twitter" />
            </NavLink>
            <NavLink to="https://www.facebook.com/connectaha/" is={Link}>
              <Icon name="facebook" />
            </NavLink>
          </div>
        </AppFooter>
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
