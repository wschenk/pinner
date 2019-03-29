import React from 'react';
import { connect } from 'react-redux';
import { ServerCluster } from 'grommet-icons';

const mapDetailsToProps = state => ({
  checking: state.network.checking,
  ipfsId: state.node
})

const Ipfs = ({checking, ipfsId}) => {
  let color = '#ccc';
  if( ipfsId.id !== null ) color = '#22ff22';
  if( checking ) color = '#2222ff';
  return (
    <ServerCluster color={color}/>
  )
}

export default connect(mapDetailsToProps)(Ipfs);
