import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSmurfs} from '../actions'
import { Card } from 'semantic-ui-react'

const Smurfs = ({getSmurfs, smurfs}) =>{
  useEffect(() => {
    getSmurfs();
  },[getSmurfs])
  console.log(smurfs)
  return(
    <div className='smurfCard'>
      {smurfs.map(smurf => {
        return(
        <Card key={smurf.id}>
          <Card.Content>
            <Card.Header>{smurf.name}</Card.Header>
            <Card.Meta>{smurf.age}</Card.Meta>
            <Card.Description>
            {smurf.height}
            </Card.Description>
          </Card.Content>
        </Card>
        ) 
      })}
    
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs

  }
}


export default connect(mapStateToProps, {getSmurfs})(Smurfs);