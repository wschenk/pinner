import React from 'react';
import { connect } from 'react-redux';
import { Cloud } from 'grommet-icons';

const mapDetailsToProps = state => ({
  network: state.network.online
})

const Network = ({network}) => (
  <Cloud color={network ? '#22ff22' : '#ccc'}/>
)

export default connect(mapDetailsToProps)(Network);
