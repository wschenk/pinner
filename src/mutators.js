import store from './store';

export const networkCheckStarted = () => store.dispatch( {type: 'NETWORK_CHECK_STARTED'} )
export const networkCheckFinished = () => store.dispatch( {type: 'NETWORK_CHECK_FINISHED'} )
export const ipfsNodeActive = payload => store.dispatch( {type: 'NODE_ACTIVE', payload: payload } )
export const ipfsNodeInactive = payload => store.dispatch( {type: 'NODE_INACTIVE', payload: payload } )

export const networkUp = () => store.dispatch( {type: 'NETWORK_STATUS', payload: true })
export const networkDown = () => store.dispatch( {type: 'NETWORK_STATUS', payload: false })
export const networkConnectionInfo = (info) => store.dispatch( {type: 'NETWORK_CONNECTION', payload: { connectionType: info.connectionType, rtt: info.rtt, downlink: info.downlink } })

export const sidebarClicked = (label) => store.dispatch( {type:'SIDEBAR_CLICKED', payload: label })
