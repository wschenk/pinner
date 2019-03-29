import React, {Fragment} from 'react'
import { connect } from 'react-redux';

const IpfsInfo = ({ipfsId, ipfsIdErr}) => {
  if(ipfsId.id) {
    return <IpfsInfoDetail ipfsId={ipfsId}/>
  }
  if(ipfsIdErr) {
    return <p>Problem connecting to IPFS {ipfsIdErr.toString()}</p>
  }
  return <p>Not totally sure yet</p>
}

const mapDetailsToProps = state => ({
  ipfsId: state.node,
  ipfsIdErr: state.node.err
})

const IpfsInfoDetail = ({ipfsId}) => (
  <Fragment>
    <p>
      ID: { ipfsId.id }
    </p>
    <p>
      Version: { ipfsId.agentVersion }
    </p>
    <p>
      ProtocolVersion: { ipfsId.protocolVersion}
    </p>
  </Fragment>
)

export default connect(mapDetailsToProps)(IpfsInfo);
