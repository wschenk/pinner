import { combineReducers } from 'redux';

const network = (state = {checking: false, online: false}, action) => {
  switch (action.type) {
    case 'NETWORK_CHECK_STARTED':
      console.log( "Checking network")
      return {...state, checking: true }
    case 'NETWORK_CHECK_FINISHED':
      console.log( "Finished checking network")
      return {...state, checking: false }
    case 'NETWORK_STATUS':
      console.log( "Network status:", action.payload)
      return {...state, online: action.payload }
    case 'NETWORK_CONNECTION':
      console.log( "Connection status:", action.payload)
      return {...state, rtt: action.payload.rtt, connectionType: action.payload.connectionType, downlink: action.payload.downlink }
    default:
      return state
  }
}

const emptyNodeState = { id: null, agentVersion: null, protocolVersion: null }
const node = (state = emptyNodeState, action ) => {
  switch (action.type) {
    case 'NODE_ACTIVE':
      const { id, agentVersion, protocolVersion } = action.payload
      return { id, agentVersion, protocolVersion, err: null }
    case 'NODE_INACTIVE':
      return {...emptyNodeState, err: action.payload }
    default:
      return state;
  }
}

const nav = (state = {location: 'Home' }, action ) => {
  switch (action.type) {
    case 'SIDEBAR_CLICKED':
      return {...state, location: action.payload}
    default:
      return state;
  }
}

export default combineReducers({
  network,
  node,
  nav
})
