import {
  ipfsNodeActive,
  ipfsNodeInactive,
  networkUp,
  networkDown,
  networkConnectionInfo,
  networkCheckStarted,
  networkCheckFinished } from './mutators';

import store from './store';

import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient('/ip4/127.0.0.1/tcp/5001');

export const startNetworkConnectionChecker = () => {
  console.log( "starting network connection checker")

  let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  networkConnectionInfo( connection )
  let type = connection.effectiveType;

  function updateConnectionStatus() {
    networkConnectionInfo( connection )
    console.log( connection )
    console.log("Connection type changed from " + type + " to " + connection.type);
  }

  connection.addEventListener('change', updateConnectionStatus);
}

export const startNetworkChecker = () => {
  console.log( "starting network checker")
  if( navigator.onLine  ) {
    networkUp()
  } else {
    networkDown()
  }

  window.addEventListener('online',  networkUp);
  window.addEventListener('offline', networkDown);
}


export const startIpfsMonitor = () => {
  pingIpfs();
  return setInterval( () => pingIpfs(), 3000 )
}

export const pingIpfs = () => {
  networkCheckStarted()
  ipfs.id( (err, res) => {
    networkCheckFinished()
    if( err ) {
      console.log( "Error is: ", err );
      ipfsNodeInactive( err )
    } else {
      console.log( res );
      ipfsNodeActive( res )
    }
  })
}

export const startLocationWatching = () => {
  window.addEventListener('popstate', () => {
    console.log( window.location.hash);
    // // here `doUpdateUrl` is an action creator t.hat
    // // takes the new url and stores it in Redux.
    // store.dispatch(doUpdateUrl(window.location.pathname))
  })

  // The other part of the two-way binding is updating the displayed
  // URL in the browser if we change it inside our app state in Redux.
  // We can simply subscribe to Redux and update it if it's different.
  store.subscribe(() => {
    const { location } = store.getState().nav
    console.log( location )
    // if (nav.pathname !== pathname) {
    //   window.history.pushState(null, '', pathname)
    //   // Force scroll to top this is what browsers normally do when
    //   // navigating by clicking a link.
    //   // Without this, scroll stays wherever it was which can be quite odd.
    //   document.body.scrollTop = 0
    // }
  })
}

const startAgents = () => {
  startNetworkChecker()
  startNetworkConnectionChecker()
  startIpfsMonitor()
  startLocationWatching()
}

export default startAgents;
