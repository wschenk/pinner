import React from 'react';

import { connect } from 'react-redux';

import IpfsInfo from './../components/ipfsInfo';

const PageRouter = ({page}) => {
  if( page === 'Dashboard' ) {
    return <p>{ page.toString() }</p>
  }

  return <IpfsInfo/>
}

const mapStateToProps = (state) => ({
  page: state.nav.location
})

export default connect(mapStateToProps)(PageRouter);
