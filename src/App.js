import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

import PageRouter from './pages/page_router';

import Sidebar from './components/sidebar';
import NetworkStatus from './components/status/network'
import IpfsStatus from './components/status/ipfs'


const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
    colors: {
     brand: '#228BE6',
   },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

class App extends Component {
  state = {showSidebar: true}

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <Provider store={store}>
          <ResponsiveContext.Consumer>
            {size => (
              <Box fill>
                <AppBar>
                  <Heading level='3' margin='none'>Pinner</Heading>
                  <IpfsStatus/>
                  <NetworkStatus/>
                  <Button icon={<Notification />}
                    onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}           />
                </AppBar>

                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                  <Box flex align='center' justify='center'>
                    <PageRouter/>
                  </Box>
                  { (!showSidebar || size !== 'small') ? (
                    <Collapsible direction="horizontal" open={showSidebar}>
                      <Box
                       flex
                       width='medium'
                       background='light-2'
                       elevation='small'
                       align='center'
                       justify='center'>
                       <Sidebar/>
                      </Box>
                    </Collapsible>
                  ) : (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        <Sidebar/>
                      </Box>
                    </Layer>
                  )
                 }
                </Box>
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </Provider>
      </Grommet>
    );
  }
}

export default App;
